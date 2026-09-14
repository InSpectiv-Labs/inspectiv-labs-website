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
      <div className="bg-white p-8 border border-slate-200 shadow-sm overflow-hidden mb-12">
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
          
          <div className="flex gap-4 pt-8 mt-8 border-t border-slate-200">
            <button type="submit" disabled={uploading} className="bg-slate-900 text-white font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-slate-800 transition-colors disabled:opacity-50">
              {uploading ? 'Processing...' : 'Save Case Study'}
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="text-slate-600 font-bold uppercase tracking-widest text-sm px-6 py-3 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-colors">
              Cancel
            </button>
          </div>
        </form>
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
