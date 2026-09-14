import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { uploadToImageKit, deleteFromImageKit } from '../../lib/imagekit';
import { marked } from 'marked';

interface Insight {
  id?: string;
  slug: string;
  title: string;
  description: string;
  author: string;
  industry: string;
  draft: boolean;
  publishDate: string;
  readTime: string;
  heroImage_url?: string;
  content: string;
}

export default function InsightsTab() {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentInsight, setCurrentInsight] = useState<Partial<Insight>>({
    title: '', slug: '', description: '', author: '', industry: 'general', draft: false, readTime: '', content: ''
  });
  
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchInsights();
  }, []);

  const fetchInsights = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('insights').select('*').order('publishDate', { ascending: false });
    if (!error) setInsights(data || []);
    setLoading(false);
  };

  const handleEdit = (insight: Insight) => {
    setCurrentInsight(insight);
    setIsEditing(true);
    setImageFile(null);
  };

  const handleCreateNew = () => {
    setCurrentInsight({
      slug: '', title: '', description: '', author: 'InSpectiv Labs', 
      industry: 'general', readTime: '', heroImage_url: '', content: '',
      publishDate: new Date().toISOString(), draft: false
    });
    setIsEditing(true);
    setImageFile(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = currentInsight.heroImage_url;

    if (imageFile) {
      setUploading(true);
      try {
        const response = await uploadToImageKit(imageFile, '/website/insights');
        imageUrl = response.url;
      } catch (err) {
        console.error('Image upload failed', err);
        alert('Image upload failed. Please try again.');
        setUploading(false);
        return;
      }
    }

    const payload = { ...currentInsight, heroImage_url: imageUrl };

    if (payload.id) {
      const { error } = await supabase.from('insights').update(payload).eq('id', payload.id);
      if (error) alert(error.message);
    } else {
      const { error } = await supabase.from('insights').insert([payload]);
      if (error) alert(error.message);
    }

    setUploading(false);
    setIsEditing(false);
    fetchInsights();
  };

  const handleDelete = async (id: string, imageUrl?: string) => {
    if (window.confirm('Are you sure you want to delete this insight?')) {
      if (imageUrl) {
        await deleteFromImageKit(imageUrl);
      }
      await supabase.from('insights').delete().eq('id', id);
      fetchInsights();
    }
  };

  if (loading) return <div className="text-cyan-600 font-bold tracking-wide uppercase">Loading insights...</div>;

  if (isEditing) {
    return (
      <div className="flex bg-gray-50 h-[85vh] mb-12 shadow-sm border border-slate-200 overflow-hidden">
        {/* Left Side: Editor */}
        <div className="w-1/2 p-8 overflow-y-auto bg-white border-r border-slate-200 relative z-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-wide">{currentInsight.id ? 'Edit Insight' : 'New Insight'}</h3>
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Title</label>
                <input type="text" required className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" value={currentInsight.title} onChange={e => setCurrentInsight({...currentInsight, title: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Slug (URL)</label>
                <input type="text" required className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" value={currentInsight.slug} onChange={e => setCurrentInsight({...currentInsight, slug: e.target.value})} />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Description</label>
                <textarea required className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" rows={2} value={currentInsight.description} onChange={e => setCurrentInsight({...currentInsight, description: e.target.value})}></textarea>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Author</label>
                <input type="text" className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" value={currentInsight.author || ''} onChange={e => setCurrentInsight({...currentInsight, author: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Industry</label>
                <input type="text" className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" value={currentInsight.industry || 'general'} onChange={e => setCurrentInsight({...currentInsight, industry: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Read Time (e.g. 5 min read)</label>
                <input type="text" className="w-full bg-white border border-slate-300 text-slate-900 p-3 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors" value={currentInsight.readTime || ''} onChange={e => setCurrentInsight({...currentInsight, readTime: e.target.value})} />
              </div>
              <div className="flex items-center mt-8">
                <input type="checkbox" id="draft-checkbox" className="w-4 h-4 text-cyan-600 bg-white border-slate-300 focus:ring-cyan-600 focus:ring-2" checked={currentInsight.draft || false} onChange={e => setCurrentInsight({...currentInsight, draft: e.target.checked})} />
                <label htmlFor="draft-checkbox" className="ml-2 text-sm font-bold text-slate-700 tracking-wide">Save as Draft (Do not publish yet)</label>
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Hero Image Upload</label>
                {(currentInsight.heroImage_url || imageFile) && (
                  <div className="mb-4">
                    <img src={imageFile ? URL.createObjectURL(imageFile) : currentInsight.heroImage_url} alt="Current" className="h-32 object-cover border border-slate-200" />
                  </div>
                )}
                <input type="file" accept="image/*" onChange={e => e.target.files && setImageFile(e.target.files[0])} className="w-full bg-white border border-slate-300 text-slate-600 p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-bold file:bg-slate-100 file:text-slate-900 hover:file:bg-slate-200 file:transition-colors" />
              </div>
              <div className="col-span-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Content (Markdown)</label>
                <textarea required className="w-full bg-white border border-slate-300 text-slate-900 p-4 focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600 transition-colors font-mono text-sm leading-relaxed" rows={18} value={currentInsight.content} onChange={e => setCurrentInsight({...currentInsight, content: e.target.value})}></textarea>
              </div>
            </div>
            
            <div className="flex gap-4 pt-6 border-t border-slate-200 sticky bottom-0 bg-white pb-2 z-20">
              <button type="submit" disabled={uploading} className="bg-slate-900 text-white font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-slate-800 transition-colors disabled:opacity-50">
                {uploading ? 'Processing...' : 'Save Insight'}
              </button>
              <button type="button" onClick={() => setIsEditing(false)} className="text-slate-600 font-bold uppercase tracking-widest text-sm px-6 py-3 border border-slate-300 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Exact Live Preview */}
        <div className="w-1/2 overflow-y-auto bg-gray-50 relative">
          <div className="sticky top-0 z-50 bg-[#000f2c] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 flex items-center justify-between border-b border-white/10 shadow-lg">
            <span>Live Preview</span>
            <span className="text-cyan-400">Desktop View</span>
          </div>
          
          <div className="preview-container">
            <header className="relative pt-16 pb-12 border-b border-gray-200 flex flex-col justify-end min-h-[35vh]">
              <div className="absolute inset-0 z-0 bg-[#000f2c]">
                {(currentInsight.heroImage_url || imageFile) && (
                  <img src={imageFile ? URL.createObjectURL(imageFile) : currentInsight.heroImage_url} className="w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000f2c] to-transparent opacity-90"></div>
              </div>

              <div className="relative z-10 px-8 w-full">
                {currentInsight.industry && (
                  <div className="mb-6">
                    <span className="px-3 py-1 border border-cyan-500/50 text-cyan-400 text-[11px] font-bold uppercase tracking-widest">
                      {currentInsight.industry}
                    </span>
                  </div>
                )}
                
                <h1 className="text-3xl font-light mb-6 leading-tight tracking-wide text-white">
                  {currentInsight.title || 'Insight Title Placeholder'}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm font-light">
                  {currentInsight.author && (
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-800 flex items-center justify-center text-cyan-400 font-semibold text-xs">
                        {currentInsight.author.charAt(0)}
                      </div>
                      <span className="text-gray-200">{currentInsight.author}</span>
                    </div>
                  )}

                  {currentInsight.readTime && (
                    <span className="flex items-center gap-2 uppercase tracking-wider text-xs font-semibold">
                      {currentInsight.readTime}
                    </span>
                  )}
                </div>
              </div>
            </header>

            <div className="px-8 pb-16 relative z-20 -mt-12">
              <div className="bg-white border border-gray-200 shadow-sm p-8">
                <div 
                  className="prose prose-slate max-w-none 
                    prose-headings:text-[#000f2c] prose-headings:font-light 
                    prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 
                    prose-h3:text-xl prose-h3:mt-6 
                    prose-p:text-gray-700 prose-p:font-light prose-p:leading-relaxed 
                    prose-a:text-[#1d4ed8] hover:prose-a:text-[#000f2c] prose-a:transition-colors
                    prose-li:text-gray-700 prose-li:font-light"
                  dangerouslySetInnerHTML={{ __html: marked.parse(currentInsight.content || 'Start typing in the Markdown editor to see preview...') as string }}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 tracking-wide">Manage Insights</h2>
        <button onClick={handleCreateNew} className="bg-cyan-600 text-white font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-cyan-700 transition-colors">
          + New Insight
        </button>
      </div>
      
      <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Insight</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest">Published</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {insights.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-slate-500 font-medium tracking-wide">No insights found. Create one!</td>
              </tr>
            ) : (
              insights.map((insight) => (
                <tr key={insight.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center">
                      {insight.heroImage_url && (
                        <img className="h-12 w-12 object-cover mr-4 border border-slate-200" src={insight.heroImage_url} alt="" />
                      )}
                      <div>
                        <div className="text-sm font-bold text-slate-900">{insight.title}</div>
                        <div className="text-xs text-slate-500 mt-1">{insight.slug} • {insight.industry}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold uppercase tracking-widest ${insight.draft ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200'}`}>
                      {insight.draft ? 'Draft' : 'Published'}
                    </span>
                  </td>
                  <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500">{new Date(insight.publishDate).toLocaleDateString()}</td>
                  <td className="px-6 py-5 whitespace-nowrap text-right text-sm font-medium space-x-3">
                    <button onClick={() => handleEdit(insight)} className="text-[11px] font-bold uppercase tracking-widest bg-cyan-50 text-cyan-600 border border-cyan-200 px-4 py-1.5 hover:bg-cyan-600 hover:text-white transition-colors">Edit</button>
                    <button onClick={() => handleDelete(insight.id!, insight.heroImage_url)} className="text-[11px] font-bold uppercase tracking-widest bg-red-50 text-red-600 border border-red-200 px-4 py-1.5 hover:bg-red-600 hover:text-white transition-colors">Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}


