import React, { useState, useEffect } from 'react';
import { LeadSubmission } from '../types';
import { getStoredLeads, updateLeadStatus, deleteLead } from '../utils/leadsStorage';
import { 
  Users, Search, Filter, Download, Trash2, CheckCircle2, 
  Clock, Mail, Phone, MapPin, ShieldCheck, RefreshCw, Lock, Key
} from 'lucide-react';

export const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Default accessible for easy preview
  const [passcode, setPasscode] = useState('');
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const refreshLeads = () => {
    setLeads(getStoredLeads());
  };

  useEffect(() => {
    refreshLeads();
  }, []);

  const handleStatusChange = (id: string, newStatus: LeadSubmission['status']) => {
    updateLeadStatus(id, newStatus);
    refreshLeads();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      deleteLead(id);
      refreshLeads();
    }
  };

  const exportCSV = () => {
    const headers = ['ID', 'Date', 'Name', 'Phone', 'Email', 'City', 'Service', 'Property Type', 'Monthly Bill', 'Source', 'Status'];
    const rows = leads.map(l => [
      l.id,
      new Date(l.createdAt).toLocaleDateString(),
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.city}"`,
      `"${l.serviceInterest}"`,
      `"${l.propertyType}"`,
      `"${l.monthlyBill || ''}"`,
      `"${l.source}"`,
      l.status
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Satchel_Powertech_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.serviceInterest.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-slate-900 text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-2">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Internal CMS Portal • Admin Lead Manager</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Satchel Powertech Lead & Inquiry Management
            </h1>
            <p className="text-slate-400 text-xs mt-1">
              Real-time portal tracking quote requests, solar calculator estimates, PDF downloads, and career applications.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={refreshLeads}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold border border-slate-700 flex items-center space-x-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>

            <button
              onClick={exportCSV}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs shadow flex items-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800">
          
          <div className="md:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search leads by name, phone, email, city, or service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
          </div>

          <div className="md:col-span-6 flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            <div className="flex space-x-1 overflow-x-auto w-full">
              {['All', 'New', 'Contacted', 'Proposal Sent', 'Closed'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                    statusFilter === status
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-slate-400 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Leads Table */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800 text-[10px]">
                <tr>
                  <th className="p-4">Lead ID & Date</th>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Service & Property</th>
                  <th className="p-4">Details / Message</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-slate-500">
                      No leads match your search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-4">
                        <span className="font-mono text-emerald-400 font-bold block">{lead.id}</span>
                        <span className="text-[10px] text-slate-500">
                          {new Date(lead.createdAt).toLocaleString('en-IN', { dateStyle: 'short', timeStyle: 'short' })}
                        </span>
                        <span className="block text-[9px] text-amber-400 font-medium mt-0.5">
                          Src: {lead.source}
                        </span>
                      </td>

                      <td className="p-4 space-y-0.5">
                        <strong className="text-white block font-bold text-sm">{lead.name}</strong>
                        <div className="text-slate-300 font-mono text-[11px]">{lead.phone}</div>
                        <div className="text-slate-400 text-[11px]">{lead.email}</div>
                      </td>

                      <td className="p-4">
                        <span className="text-slate-200 font-medium block">{lead.city}</span>
                        <span className="text-slate-500 text-[10px]">{lead.state}</span>
                      </td>

                      <td className="p-4">
                        <span className="font-bold text-emerald-300 block">{lead.serviceInterest}</span>
                        <span className="text-slate-400 text-[10px]">{lead.propertyType}</span>
                        {lead.monthlyBill && (
                          <span className="block text-[10px] text-amber-300 font-semibold mt-0.5">
                            Bill: {lead.monthlyBill}
                          </span>
                        )}
                      </td>

                      <td className="p-4 max-w-xs">
                        <p className="text-slate-300 text-[11px] line-clamp-2">
                          {lead.message || 'No additional note.'}
                        </p>
                        {lead.roofAreaSqFt && (
                          <span className="text-[10px] text-slate-500 block mt-0.5">
                            Area: {lead.roofAreaSqFt}
                          </span>
                        )}
                      </td>

                      <td className="p-4">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                          className={`px-2.5 py-1.5 rounded-lg text-xs font-bold border focus:outline-none ${
                            lead.status === 'New' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                            lead.status === 'Contacted' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' :
                            lead.status === 'Proposal Sent' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' :
                            'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                          }`}
                        >
                          <option value="New" className="bg-slate-900 text-white">New</option>
                          <option value="Contacted" className="bg-slate-900 text-white">Contacted</option>
                          <option value="Proposal Sent" className="bg-slate-900 text-white">Proposal Sent</option>
                          <option value="Closed" className="bg-slate-900 text-white">Closed</option>
                        </select>
                      </td>

                      <td className="p-4 text-right">
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-slate-900 rounded-lg transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
