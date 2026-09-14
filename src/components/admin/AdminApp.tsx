import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { LogOut, Inbox, FileText, LayoutDashboard, FileArchive } from 'lucide-react';

// We will implement these components next
import InquiriesTab from './InquiriesTab';
import CaseStudiesTab from './CaseStudiesTab';
import InsightsTab from './InsightsTab';

export default function AdminApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/insights')) return 'insights';
      if (path.includes('/case-studies')) return 'case-studies';
    }
    return 'inquiries';
  });

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    window.history.pushState({}, '', `/admin${tab === 'inquiries' ? '' : '/' + tab}`);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.includes('/insights')) setActiveTab('insights');
      else if (path.includes('/case-studies')) setActiveTab('case-studies');
      else setActiveTab('inquiries');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setAuthError(error.message);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-md w-full p-10 bg-[#001a3d] border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img src="/images/logo.png" alt="InSpectiv Labs" className="h-10 w-auto object-contain" />
          </div>
          <h2 className="text-xl font-bold text-center mb-8 tracking-widest text-white uppercase">Admin Access</h2>
          {authError && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 mb-4 text-sm">{authError}</div>
          )}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email</label>
              <input
                type="email"
                required
                className="block w-full bg-[#000f2c] border border-white/15 text-white p-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Password</label>
              <input
                type="password"
                required
                className="block w-full bg-[#000f2c] border border-white/15 text-white p-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors placeholder-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 text-sm font-bold uppercase tracking-widest text-white bg-cyan-600 hover:bg-cyan-500 transition-colors relative overflow-hidden group"
            >
              <span className="relative z-10">Authenticate</span>
              <div className="absolute inset-0 w-full h-full bg-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen text-slate-900 relative z-10">
      {/* Sidebar */}
      <div className="w-64 bg-[#00122e] border-r border-white/10 flex flex-col z-20">
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <img src="/images/logo.png" alt="InSpectiv Labs" className="h-12 w-auto object-contain" />
          <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Admin</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <button
            onClick={() => navigateTo('inquiries')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors ${activeTab === 'inquiries' ? 'bg-cyan-600/15 text-cyan-400 border-l-2 border-cyan-400' : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'}`}
          >
            <Inbox className="w-4 h-4" />
            Inquiries
          </button>
          <button
            onClick={() => navigateTo('case-studies')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors ${activeTab === 'case-studies' ? 'bg-cyan-600/15 text-cyan-400 border-l-2 border-cyan-400' : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'}`}
          >
            <FileArchive className="w-4 h-4" />
            Case Studies
          </button>
          <button
            onClick={() => navigateTo('insights')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold tracking-wide transition-colors ${activeTab === 'insights' ? 'bg-cyan-600/15 text-cyan-400 border-l-2 border-cyan-400' : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-2 border-transparent'}`}
          >
            <FileText className="w-4 h-4" />
            Insights
          </button>
        </nav>
        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white relative">
        <header className="bg-[#000f2c] border-b border-white/10 sticky top-0 z-10">
          <div className="px-10 py-6">
            <h2 className="text-2xl font-bold text-white capitalize tracking-wide">
              {activeTab.replace('-', ' ')}
            </h2>
          </div>
        </header>
        <main className="p-10 relative z-0">
          {activeTab === 'inquiries' && <InquiriesTab />}
          {activeTab === 'case-studies' && <CaseStudiesTab />}
          {activeTab === 'insights' && <InsightsTab />}
        </main>
      </div>
    </div>
  );
}

