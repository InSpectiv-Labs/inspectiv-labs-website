import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { LogOut, Inbox, FileText, LayoutDashboard, FileArchive, ChevronLeft, ChevronRight } from 'lucide-react';

// We will implement these components next
import InquiriesTab from './InquiriesTab';
import CaseStudiesTab from './CaseStudiesTab';
import InsightsTab from './InsightsTab';

export default function AdminApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    <div className="flex flex-col lg:flex-row h-screen text-slate-900 relative z-10">
      {/* Sidebar / Top Nav */}
      <div className={`w-full ${isSidebarOpen ? 'lg:w-64' : 'lg:w-20'} transition-all duration-300 bg-[#00122e] lg:border-r border-white/10 flex flex-col z-20 flex-shrink-0`}>
        <div className={`p-4 lg:p-6 border-b border-white/10 flex items-center justify-between gap-3 relative`}>
          <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
            <img src="/images/logo.png" alt="InSpectiv Labs" className={`h-8 w-auto object-contain ${!isSidebarOpen ? 'lg:hidden' : ''}`} />
            <img src="/favicon.png" alt="InSpectiv Labs" className={`hidden h-8 w-8 object-contain ${!isSidebarOpen ? 'lg:block' : ''}`} />
            <span className={`text-xs font-bold text-gray-500 tracking-widest uppercase hidden md:inline ${!isSidebarOpen ? 'lg:hidden' : ''}`}>Admin</span>
          </div>
          
          {/* Toggle Button for Desktop */}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
            className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 bg-[#000f2c] border border-white/10 text-cyan-400 p-1 rounded-full hover:bg-cyan-900/30 transition-colors z-50"
          >
            {isSidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          <button onClick={handleLogout} className="lg:hidden text-gray-500 hover:text-red-400 p-2">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex lg:flex-col p-2 lg:p-0 gap-1 lg:space-y-0 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <button
            onClick={() => navigateTo('inquiries')}
            className={`flex-1 lg:w-full flex items-center ${isSidebarOpen ? 'justify-center lg:justify-start lg:gap-3 lg:px-6 lg:py-4' : 'justify-center gap-2 lg:gap-0 px-4 py-3 lg:py-6'} text-sm font-semibold tracking-wide transition-colors ${activeTab === 'inquiries' ? 'bg-cyan-600/15 text-cyan-400 lg:border-l-2 border-b-2 lg:border-b-0 border-cyan-400' : 'text-gray-400 hover:text-white hover:bg-white/5 lg:border-l-2 border-b-2 lg:border-b-0 border-transparent'}`}
            title={!isSidebarOpen ? "Inquiries" : ""}
          >
            <Inbox className={`w-4 h-4 ${!isSidebarOpen ? 'lg:w-6 lg:h-6' : 'lg:w-5 lg:h-5'}`} />
            <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>Inquiries</span>
          </button>
          <button
            onClick={() => navigateTo('case-studies')}
            className={`flex-1 lg:w-full flex items-center ${isSidebarOpen ? 'justify-center lg:justify-start lg:gap-3 lg:px-6 lg:py-4' : 'justify-center gap-2 lg:gap-0 px-4 py-3 lg:py-6'} text-sm font-semibold tracking-wide transition-colors ${activeTab === 'case-studies' ? 'bg-cyan-600/15 text-cyan-400 lg:border-l-2 border-b-2 lg:border-b-0 border-cyan-400' : 'text-gray-400 hover:text-white hover:bg-white/5 lg:border-l-2 border-b-2 lg:border-b-0 border-transparent'}`}
            title={!isSidebarOpen ? "Case Studies" : ""}
          >
            <FileArchive className={`w-4 h-4 ${!isSidebarOpen ? 'lg:w-6 lg:h-6' : 'lg:w-5 lg:h-5'}`} />
            <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>Case Studies</span>
          </button>
          <button
            onClick={() => navigateTo('insights')}
            className={`flex-1 lg:w-full flex items-center ${isSidebarOpen ? 'justify-center lg:justify-start lg:gap-3 lg:px-6 lg:py-4' : 'justify-center gap-2 lg:gap-0 px-4 py-3 lg:py-6'} text-sm font-semibold tracking-wide transition-colors ${activeTab === 'insights' ? 'bg-cyan-600/15 text-cyan-400 lg:border-l-2 border-b-2 lg:border-b-0 border-cyan-400' : 'text-gray-400 hover:text-white hover:bg-white/5 lg:border-l-2 border-b-2 lg:border-b-0 border-transparent'}`}
            title={!isSidebarOpen ? "Insights" : ""}
          >
            <FileText className={`w-4 h-4 ${!isSidebarOpen ? 'lg:w-6 lg:h-6' : 'lg:w-5 lg:h-5'}`} />
            <span className={`${!isSidebarOpen ? 'lg:hidden' : ''}`}>Insights</span>
          </button>
        </nav>
        <div className={`hidden lg:flex ${isSidebarOpen ? 'p-4' : 'p-4 justify-center'} border-t border-white/10 mt-auto`}>
          <button
            onClick={handleLogout}
            className={`flex items-center ${isSidebarOpen ? 'w-full gap-3 px-4 py-2.5 rounded-none' : 'justify-center p-3 rounded-lg'} text-sm font-semibold text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-colors`}
            title={!isSidebarOpen ? "Logout" : ""}
          >
            <LogOut className={`${!isSidebarOpen ? 'w-6 h-6' : 'w-5 h-5'}`} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white relative">
        <header className="bg-[#000f2c] border-b border-white/10 sticky top-0 z-10">
          <div className="px-6 md:px-10 py-4 md:py-6">
            <h2 className="text-xl md:text-2xl font-bold text-white capitalize tracking-wide">
              {activeTab.replace('-', ' ')}
            </h2>
          </div>
        </header>
        <main className="p-4 md:p-6 lg:p-10 relative z-0">
          {activeTab === 'inquiries' && <InquiriesTab />}
          {activeTab === 'case-studies' && <CaseStudiesTab />}
          {activeTab === 'insights' && <InsightsTab />}
        </main>
      </div>
    </div>
  );
}

