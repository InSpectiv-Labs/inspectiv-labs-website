import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { uploadToImageKit, deleteFromImageKit } from '../../lib/imagekit';

export default function CaseStudiesTab() {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCaseStudy, setCurrentCaseStudy] = useState<any>(null);
  const [jsonMode, setJsonMode] = useState(false);
  
  // Form states
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Raw JSON strings for editing complex objects
  const [masterJson, setMasterJson] = useState('');

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('case_studies').select('*').order('created_at', { ascending: false });
    if (!error) setCaseStudies(data || []);
    setLoading(false);
  };

  const handleEdit = (cs: any) => {
    setCurrentCaseStudy({
      ...cs,
      methodology: cs.methodology || {},
      technicalFindings: cs.technicalFindings || [],
      businessImpact: cs.businessImpact || []
    });
    const combined = {
      methodology: cs.methodology || {},
      imagePlaceholder: cs.imagePlaceholder || null,
      technicalFindings: cs.technicalFindings || [],
      businessImpact: cs.businessImpact || []
    };
    setMasterJson(JSON.stringify(combined, null, 2));
    setIsEditing(true);
    setImageFile(null);
  };

  const handleCreateNew = () => {
    setCurrentCaseStudy({
      slug: '', category: '', cardTitle: '', cardSubtitle: '', cardDescription: '', 
      cardImage_url: '', pageTitle: '', pageSubtitle: '', 
      executiveSummary: '', challenge: '', methodology: {}, 
      technicalFindings: [], businessImpact: []
    });
    const combined = {
      methodology: {},
      imagePlaceholder: null,
      technicalFindings: [],
      businessImpact: []
    };
    setMasterJson(JSON.stringify(combined, null, 2));
    setIsEditing(true);
    setImageFile(null);
  };

  const toggleJsonMode = () => {
    if (jsonMode) {
      try {
        const parsed = JSON.parse(masterJson);
        setCurrentCaseStudy({
          ...currentCaseStudy,
          methodology: parsed.methodology || {},
          imagePlaceholder: parsed.imagePlaceholder || null,
          technicalFindings: parsed.technicalFindings || [],
          businessImpact: parsed.businessImpact || []
        });
        setJsonMode(false);
      } catch (e) {
        alert('Invalid JSON syntax! Please fix JSON errors before switching to Visual Mode.');
      }
    } else {
      const combined = {
        methodology: currentCaseStudy.methodology || {},
        imagePlaceholder: currentCaseStudy.imagePlaceholder || null,
        technicalFindings: currentCaseStudy.technicalFindings || [],
        businessImpact: currentCaseStudy.businessImpact || []
      };
      setMasterJson(JSON.stringify(combined, null, 2));
      setJsonMode(true);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = currentCaseStudy.cardImage_url;

    if (imageFile) {
      setUploading(true);
      try {
        const response = await uploadToImageKit(imageFile, '/website/case-studies');
        imageUrl = response.url;
      } catch (err) {
        console.error('Image upload failed', err);
        alert('Image upload failed. Please try again.');
        setUploading(false);
        return;
      }
    }

    let methodology = null, imagePlaceholder = null, technicalFindings = null, businessImpact = null;
    
    if (jsonMode) {
      try { 
        const parsed = JSON.parse(masterJson);
        methodology = parsed.methodology || null;
        imagePlaceholder = parsed.imagePlaceholder || null;
        technicalFindings = parsed.technicalFindings || null;
        businessImpact = parsed.businessImpact || null;
      } catch { alert('Invalid JSON! Please fix before saving.'); return; }
    } else {
      methodology = currentCaseStudy.methodology || null;
      imagePlaceholder = currentCaseStudy.imagePlaceholder || null;
      technicalFindings = currentCaseStudy.technicalFindings || null;
      businessImpact = currentCaseStudy.businessImpact || null;
    }

    // Auto-fill imagePlaceholder.src with uploaded image URL if not manually set
    if (imageUrl && imagePlaceholder) {
      if (!imagePlaceholder.src) {
        imagePlaceholder = { ...imagePlaceholder, src: imageUrl };
      }
    } else if (imageUrl && !imagePlaceholder) {
      imagePlaceholder = { src: imageUrl, caption: '' };
    }

    const payload = { 
      ...currentCaseStudy, 
      cardImage_url: imageUrl,
      methodology,
      imagePlaceholder,
      technicalFindings,
      businessImpact
    };

    if (payload.id) {
      const { error } = await supabase.from('case_studies').update(payload).eq('id', payload.id);
      if (error) alert(error.message);
    } else {
      const { error } = await supabase.from('case_studies').insert([payload]);
      if (error) alert(error.message);
    }

    setUploading(false);
    setIsEditing(false);
    fetchCaseStudies();
  };

  const handleDelete = async (id: string, imageUrl?: string) => {
    if (window.confirm('Are you sure you want to delete this case study?')) {
      if (imageUrl) {
        await deleteFromImageKit(imageUrl);
      }
      await supabase.from('case_studies').delete().eq('id', id);
      fetchCaseStudies();
    }
  };

  const renderInput = (label: string, value: string, onChange: (v: string) => void, required = false) => (
    <div>
      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{label}</label>
      <input type="text" required={required} className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" value={value || ''} onChange={e => onChange(e.target.value)} />
    </div>
  );

  const renderTextarea = (label: string, value: string, onChange: (v: string) => void, rows = 3, required = false) => (
    <div className="col-span-2">
      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">{label}</label>
      <textarea required={required} className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" rows={rows} value={value || ''} onChange={e => onChange(e.target.value)}></textarea>
    </div>
  );

  if (loading) return <div className="text-cyan-600 font-bold tracking-wide uppercase">Loading case studies...</div>;

  if (isEditing) {
    return (
      <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(100vh-6rem)] overflow-y-auto lg:overflow-hidden -m-4 md:-m-6 lg:-m-10">
        {/* Left Side: Editor */}
        <div className="w-full lg:w-[40%] lg:overflow-y-auto p-4 md:p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-wide">{currentCaseStudy.id ? 'Edit Case Study' : 'New Case Study'}</h3>
          <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            {renderInput('Card Title', currentCaseStudy.cardTitle, v => setCurrentCaseStudy({...currentCaseStudy, cardTitle: v}), true)}
            {renderInput('Slug (URL)', currentCaseStudy.slug, v => setCurrentCaseStudy({...currentCaseStudy, slug: v}), true)}
            {renderInput('Category', currentCaseStudy.category, v => setCurrentCaseStudy({...currentCaseStudy, category: v}), true)}
            {renderInput('Card Subtitle', currentCaseStudy.cardSubtitle, v => setCurrentCaseStudy({...currentCaseStudy, cardSubtitle: v}))}
            {renderTextarea('Card Description', currentCaseStudy.cardDescription, v => setCurrentCaseStudy({...currentCaseStudy, cardDescription: v}), 3, true)}
            
            <div className="col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Image Upload</label>
              {(currentCaseStudy.cardImage_url || imageFile) && (
                <div className="mb-4">
                  <img src={imageFile ? URL.createObjectURL(imageFile) : currentCaseStudy.cardImage_url} alt="Current" className="h-32 object-cover border border-slate-200" />
                </div>
              )}
              <input type="file" accept="image/*" onChange={e => e.target.files && setImageFile(e.target.files[0])} className="w-full bg-white border border-slate-300 text-slate-600 p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-bold file:bg-slate-100 file:text-slate-900 hover:file:bg-slate-200 file:transition-colors" />
            </div>
            
            <div className="col-span-2 pt-4">
              <h4 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Detailed Page Content</h4>
            </div>
            {renderInput('Page Title', currentCaseStudy.pageTitle, v => setCurrentCaseStudy({...currentCaseStudy, pageTitle: v}))}
            {renderInput('Page Subtitle', currentCaseStudy.pageSubtitle, v => setCurrentCaseStudy({...currentCaseStudy, pageSubtitle: v}))}
            {renderTextarea('Executive Summary', currentCaseStudy.executiveSummary, v => setCurrentCaseStudy({...currentCaseStudy, executiveSummary: v}), 4)}
            {renderTextarea('Challenge', currentCaseStudy.challenge, v => setCurrentCaseStudy({...currentCaseStudy, challenge: v}), 4)}
            
            <div className="col-span-2 pt-6 flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
              <h4 className="text-lg font-bold text-slate-900">Advanced Data</h4>
              <button 
                type="button" 
                onClick={toggleJsonMode}
                className="text-sm font-bold bg-slate-900 text-white px-4 py-1.5 hover:bg-slate-800 transition-colors tracking-wide"
              >
                {jsonMode ? 'Switch to Visual Editor' : 'Switch to Raw JSON (ChatGPT)'}
              </button>
            </div>

            {jsonMode ? (
              <>
                <div className="col-span-2 bg-blue-50 text-blue-800 border border-blue-200 p-4 text-sm mb-2">
                  <strong>JSON Mode Enabled:</strong> You can directly paste a single JSON object containing `methodology`, `imagePlaceholder`, `technicalFindings`, and `businessImpact` generated by ChatGPT into the text area below. Ensure the JSON is valid.
                </div>
                <div className="col-span-2">
                  <textarea className="w-full bg-slate-900 text-green-400 p-4 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all font-mono text-sm" rows={25} value={masterJson} onChange={e => setMasterJson(e.target.value)}></textarea>
                </div>
              </>
            ) : (
              <>
                <div className="col-span-2">
                  <h5 className="font-bold text-slate-900 mb-4 bg-slate-50 border border-slate-200 p-2 px-4">Methodology</h5>
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {renderInput('Data Engine', currentCaseStudy.methodology?.dataEngine, v => setCurrentCaseStudy({...currentCaseStudy, methodology: {...(currentCaseStudy.methodology||{}), dataEngine: v}}))}
                    {renderInput('Processing Technique', currentCaseStudy.methodology?.processingTechnique, v => setCurrentCaseStudy({...currentCaseStudy, methodology: {...(currentCaseStudy.methodology||{}), processingTechnique: v}}))}
                    {renderInput('Measurement Physics', currentCaseStudy.methodology?.measurementPhysics, v => setCurrentCaseStudy({...currentCaseStudy, methodology: {...(currentCaseStudy.methodology||{}), measurementPhysics: v}}))}
                    {renderInput('Analytical Focus', currentCaseStudy.methodology?.analyticalFocus, v => setCurrentCaseStudy({...currentCaseStudy, methodology: {...(currentCaseStudy.methodology||{}), analyticalFocus: v}}))}
                  </div>
                </div>

                <div className="col-span-2 mt-4">
                  <h5 className="font-bold text-slate-900 mb-4 bg-slate-50 border border-slate-200 p-2 px-4">Image Placeholder</h5>
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {renderInput('Image Source', currentCaseStudy.imagePlaceholder?.src, v => setCurrentCaseStudy({...currentCaseStudy, imagePlaceholder: {...(currentCaseStudy.imagePlaceholder||{}), src: v}}))}
                    {renderInput('Caption', currentCaseStudy.imagePlaceholder?.caption, v => setCurrentCaseStudy({...currentCaseStudy, imagePlaceholder: {...(currentCaseStudy.imagePlaceholder||{}), caption: v}}))}
                  </div>
                </div>

                <div className="col-span-2 mt-4">
                  <h5 className="font-bold text-slate-900 mb-4 bg-slate-50 border border-slate-200 p-2 px-4 flex justify-between items-center">
                    Technical Findings
                    <button type="button" onClick={() => setCurrentCaseStudy({...currentCaseStudy, technicalFindings: [...(currentCaseStudy.technicalFindings||[]), {zoneClassification: '', observedSignal: '', interpretation: ''}]})} className="bg-white border border-slate-300 text-xs font-bold text-slate-600 px-3 py-1 hover:bg-slate-50">+ Add Finding</button>
                  </h5>
                  <div className="space-y-4 px-4">
                    {(currentCaseStudy.technicalFindings||[]).map((finding: any, idx: number) => (
                      <div key={idx} className="bg-slate-50 p-4 border border-slate-200 relative">
                        <button type="button" onClick={() => setCurrentCaseStudy({...currentCaseStudy, technicalFindings: currentCaseStudy.technicalFindings.filter((_:any, i:number) => i !== idx)})} className="absolute top-2 right-2 text-red-600 text-xs font-bold hover:underline">Remove</button>
                        <div className="grid grid-cols-2 gap-4 mt-2">
                          {renderInput('Zone Classification', finding.zoneClassification, v => { const a = [...currentCaseStudy.technicalFindings]; a[idx].zoneClassification = v; setCurrentCaseStudy({...currentCaseStudy, technicalFindings: a})})}
                          {renderInput('Observed Signal', finding.observedSignal, v => { const a = [...currentCaseStudy.technicalFindings]; a[idx].observedSignal = v; setCurrentCaseStudy({...currentCaseStudy, technicalFindings: a})})}
                          <div className="col-span-2">
                            {renderTextarea('Interpretation', finding.interpretation, v => { const a = [...currentCaseStudy.technicalFindings]; a[idx].interpretation = v; setCurrentCaseStudy({...currentCaseStudy, technicalFindings: a})}, 2)}
                          </div>
                        </div>
                      </div>
                    ))}
                    {(!currentCaseStudy.technicalFindings || currentCaseStudy.technicalFindings.length === 0) && <p className="text-sm text-slate-500 italic">No technical findings added yet.</p>}
                  </div>
                </div>

                <div className="col-span-2 mt-4">
                  <h5 className="font-bold text-slate-900 mb-4 bg-slate-50 border border-slate-200 p-2 px-4 flex justify-between items-center">
                    Business Impact
                    <button type="button" onClick={() => setCurrentCaseStudy({...currentCaseStudy, businessImpact: [...(currentCaseStudy.businessImpact||[]), {title: '', description: ''}]})} className="bg-white border border-slate-300 text-xs font-bold text-slate-600 px-3 py-1 hover:bg-slate-50">+ Add Impact</button>
                  </h5>
                  <div className="space-y-4 px-4">
                    {(currentCaseStudy.businessImpact||[]).map((impact: any, idx: number) => (
                      <div key={idx} className="bg-slate-50 p-4 border border-slate-200 relative">
                        <button type="button" onClick={() => setCurrentCaseStudy({...currentCaseStudy, businessImpact: currentCaseStudy.businessImpact.filter((_:any, i:number) => i !== idx)})} className="absolute top-2 right-2 text-red-600 text-xs font-bold hover:underline">Remove</button>
                        <div className="grid grid-cols-1 gap-4 mt-2">
                          {renderInput('Impact Title', impact.title, v => { const a = [...currentCaseStudy.businessImpact]; a[idx].title = v; setCurrentCaseStudy({...currentCaseStudy, businessImpact: a})})}
                          {renderTextarea('Description', impact.description, v => { const a = [...currentCaseStudy.businessImpact]; a[idx].description = v; setCurrentCaseStudy({...currentCaseStudy, businessImpact: a})}, 2)}
                        </div>
                      </div>
                    ))}
                    {(!currentCaseStudy.businessImpact || currentCaseStudy.businessImpact.length === 0) && <p className="text-sm text-slate-500 italic">No business impacts added yet.</p>}
                  </div>
                </div>
              </>
            )}
          </div>
          
          <div className="flex gap-4 pt-6 border-t border-slate-200 sticky bottom-0 bg-white pb-2 z-20 mt-8">
            <button type="submit" disabled={uploading} className="bg-slate-900 text-white font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-slate-800 transition-colors disabled:opacity-50">
              {uploading ? 'Processing...' : 'Save Case Study'}
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="text-slate-600 font-bold uppercase tracking-widest text-sm px-6 py-3 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-colors">
              Cancel
            </button>
          </div>
        </form>
        </div>

        {/* Right Side: Exact Live Preview */}
        <div className="w-full lg:w-[60%] lg:overflow-y-auto bg-gray-50 relative min-h-[50vh]">
          <div className="sticky top-0 z-50 bg-[#000f2c] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 flex items-center justify-between border-b border-white/10 shadow-lg">
            <span>Live Preview</span>
            <span className="text-cyan-400">Desktop View</span>
          </div>
          
          <div className="preview-container relative bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative pt-16 pb-12 bg-[#000f2c] text-white overflow-hidden min-h-[35vh] flex flex-col justify-end">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500 rounded-[100%] blur-[120px] opacity-10 pointer-events-none"></div>
              <div className="relative z-10 px-8">
                <h1 className="text-3xl font-light mb-4 tracking-wide leading-tight">{currentCaseStudy.pageTitle || 'Page Title Placeholder'}</h1>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {currentCaseStudy.pageSubtitle || 'Page subtitle goes here. It provides a brief summary.'}
                </p>
              </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="py-12">
              <div className="px-8">
                <div className="flex flex-col gap-8">
                  {/* Left Column in Preview */}
                  <div className="w-full space-y-12">
                    {currentCaseStudy.executiveSummary && (
                      <div>
                        <h2 className="text-2xl font-semibold text-[#000f2c] mb-4 tracking-tight relative pb-4">
                          Executive Summary
                          <span className="absolute bottom-0 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
                        </h2>
                        <p className="text-sm text-gray-600 font-light leading-relaxed text-justify">{currentCaseStudy.executiveSummary}</p>
                      </div>
                    )}

                    {currentCaseStudy.challenge && (
                      <div>
                        <h2 className="text-2xl font-semibold text-[#000f2c] mb-4 tracking-tight relative pb-4">
                          The Challenge
                          <span className="absolute bottom-0 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
                        </h2>
                        <p className="text-sm text-gray-600 font-light leading-relaxed text-justify">{currentCaseStudy.challenge}</p>
                      </div>
                    )}

                    {(currentCaseStudy.methodology?.dataEngine || currentCaseStudy.methodology?.processingTechnique) && (
                      <div>
                        <h2 className="text-2xl font-semibold text-[#000f2c] mb-4 tracking-tight relative pb-4">
                          InSpectiv Labs Solution & Methodology
                          <span className="absolute bottom-0 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
                        </h2>
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                          {currentCaseStudy.methodology.dataEngine && (
                            <div className="flex flex-col md:flex-row gap-2">
                              <div className="md:w-1/3"><h3 className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">Data Engine</h3></div>
                              <div className="md:w-2/3 text-xs text-gray-700 font-light">{currentCaseStudy.methodology.dataEngine}</div>
                            </div>
                          )}
                          <div className="h-px bg-gray-100 w-full"></div>
                          {currentCaseStudy.methodology.processingTechnique && (
                            <div className="flex flex-col md:flex-row gap-2">
                              <div className="md:w-1/3"><h3 className="text-[11px] font-bold text-cyan-700 uppercase tracking-wider">Processing Technique</h3></div>
                              <div className="md:w-2/3 text-xs text-gray-700 font-light">{currentCaseStudy.methodology.processingTechnique}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {(currentCaseStudy.imagePlaceholder?.src) && (
                      <div className="my-8">
                        <figure className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm p-4">
                          <img src={currentCaseStudy.imagePlaceholder.src} alt="Preview" className="w-full h-auto rounded-lg" />
                          <figcaption className="mt-2 text-xs text-gray-500 font-light italic leading-relaxed text-center">
                            {currentCaseStudy.imagePlaceholder.caption}
                          </figcaption>
                        </figure>
                      </div>
                    )}

                    {currentCaseStudy.technicalFindings && currentCaseStudy.technicalFindings.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-semibold text-[#000f2c] mb-4 tracking-tight relative pb-4">
                          Key Technical Findings
                          <span className="absolute bottom-0 left-0 w-12 h-1 bg-cyan-500 rounded-full"></span>
                        </h2>
                        <div className="overflow-x-auto">
                          <table className="w-full bg-white border border-gray-100 shadow-sm rounded-xl overflow-hidden text-xs">
                            <thead className="bg-gray-50 border-b border-gray-100">
                              <tr>
                                <th className="text-left py-3 px-4 font-bold text-gray-900">Zone Classification</th>
                                <th className="text-left py-3 px-4 font-bold text-gray-900">Observed Signal</th>
                                <th className="text-left py-3 px-4 font-bold text-gray-900">Interpretation</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {currentCaseStudy.technicalFindings.map((finding: any, i: number) => (
                                <tr key={i} className="hover:bg-gray-50/50">
                                  <td className="py-3 px-4 align-top">
                                    <span className="inline-block px-2 py-1 bg-red-100 text-red-800 text-[10px] font-bold rounded-sm whitespace-nowrap">
                                      {finding.zoneClassification || 'Zone X'}
                                    </span>
                                  </td>
                                  <td className="py-3 px-4 text-gray-600 font-light align-top">{finding.observedSignal}</td>
                                  <td className="py-3 px-4 text-gray-600 font-light align-top">{finding.interpretation}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Sidebar in Preview */}
                  <div className="w-full">
                    {currentCaseStudy.businessImpact && currentCaseStudy.businessImpact.length > 0 && (
                      <div className="bg-[#000f2c] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#1d4ed8] opacity-20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                          <i className="bx bx-trending-up text-[#1d4ed8] text-xl"></i>
                          Business Impact
                        </h3>
                        <div className="space-y-4">
                          {currentCaseStudy.businessImpact.map((impact: any, i: number) => (
                            <div key={i} className="flex gap-3">
                              <div className="mt-1 flex-shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div></div>
                              <div>
                                <h4 className="font-bold text-xs text-gray-100 mb-1">{impact.title || 'Impact Title'}</h4>
                                <p className="text-[11px] text-gray-400 font-light leading-relaxed">{impact.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold text-slate-900 tracking-wide">Manage Case Studies</h3>
        <button onClick={handleCreateNew} className="bg-cyan-600 text-white font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-cyan-700 transition-colors">
          + New Case Study
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map(cs => (
          <div key={cs.id} className="bg-white border border-slate-200 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300">
            {cs.cardImage_url ? (
              <div className="h-48 relative overflow-hidden bg-slate-100 border-b border-slate-200">
                <img src={cs.cardImage_url} alt={cs.cardTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ) : (
              <div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-200">
                <span className="text-slate-400 font-medium">No Image</span>
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <h4 className="font-bold text-slate-900 text-lg mb-3">{cs.cardTitle}</h4>
              <p className="text-sm text-slate-600 line-clamp-3 mb-6 flex-1">{cs.cardDescription}</p>
              <div className="flex gap-3 pt-4 border-t border-slate-200">
                <button onClick={() => handleEdit(cs)} className="text-[11px] font-bold uppercase tracking-widest bg-cyan-50 text-cyan-600 border border-cyan-200 px-4 py-1.5 hover:bg-cyan-600 hover:text-white transition-colors">Edit</button>
                <button onClick={() => handleDelete(cs.id, cs.cardImage_url)} className="text-[11px] font-bold uppercase tracking-widest bg-red-50 text-red-600 border border-red-200 px-4 py-1.5 hover:bg-red-600 hover:text-white transition-colors">Delete</button>
              </div>
            </div>
          </div>
        ))}
        {caseStudies.length === 0 && (
          <div className="col-span-full text-center text-slate-500 font-medium py-12 border border-dashed border-slate-300">
            No case studies found. Initialize sequence to begin.
          </div>
        )}
      </div>
    </div>
  );
}
