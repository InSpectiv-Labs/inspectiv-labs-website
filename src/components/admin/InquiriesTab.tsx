import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  created_at: string;
}

export default function InquiriesTab() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error('Error fetching inquiries:', error);
    } else {
      setInquiries(data || []);
    }
    setLoading(false);
  };

  if (loading) return <div className="text-cyan-600 font-bold tracking-wide uppercase">Loading inquiries...</div>;

  return (
    <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Date</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Name</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Contact</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Subject</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-widest border-b border-slate-200">Message</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {inquiries.length === 0 ? (
            <tr>
              <td colSpan={5} className="px-6 py-12 text-center text-slate-500 font-medium tracking-wide">No inquiries found</td>
            </tr>
          ) : (
            inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-500 font-medium">
                  {new Date(inquiry.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-sm font-bold text-slate-900 tracking-wide">{inquiry.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{inquiry.company}</div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-sm text-slate-600 font-medium">
                  <a href={`mailto:${inquiry.email}`} className="text-cyan-600 hover:text-cyan-800 transition-colors">{inquiry.email}</a>
                </td>
                <td className="px-6 py-5 text-sm text-slate-800 font-bold">
                  {inquiry.subject}
                </td>
                <td className="px-6 py-5 text-sm text-slate-600 font-medium max-w-md">
                  <p className="truncate hover:text-slate-900 transition-colors cursor-default" title={inquiry.message}>
                    {inquiry.message}
                  </p>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

