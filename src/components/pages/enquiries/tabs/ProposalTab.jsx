import React, { useState } from "react";
import { X, Plus, FileText, CheckCircle2, ChevronDown } from "lucide-react";

export default function QuotationTab({ onConvert }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="relative animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Proposals</h2>
          <p className="text-xs text-slate-400 font-medium">Manage all customer quotations</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-slate-500 px-4 py-2 rounded-xl text-[11px] font-bold uppercase border border-slate-200 hover:bg-slate-50 transition-all">
            Close Enquiry
          </button>
          <button 
            onClick={() => setShowForm(true)} 
            className="bg-[#1e3a3a] text-white px-5 py-2 rounded-xl text-[11px] font-bold uppercase flex items-center gap-2 hover:bg-slate-800 shadow-lg shadow-[#1e3a3a]/20 transition-all"
          >
            <Plus size={16} strokeWidth={3}/> Add Proposal
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-slate-50/30">
        <table className="w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="bg-[#1e3a3a] text-white/90 font-bold uppercase text-[10px] tracking-widest">
              <th className="p-4 pl-6">Select</th>
              <th className="p-4">Proposal ID</th>
              <th className="p-4 text-center">Date</th>
              <th className="p-4 text-center">Enquiry Ref</th>
              <th className="p-4 text-right pr-6">Amount</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-50">
            <tr className="hover:bg-slate-50/80 transition-colors group">
              <td className="p-4 pl-6"><input type="checkbox" className="w-4 h-4 accent-[#1e3a3a] cursor-pointer" /></td>
              <td className="p-4 font-bold text-slate-700 flex items-center gap-2">
                <FileText size={14} className="text-slate-300"/> PROP2025001
              </td>
              <td className="p-4 text-slate-500 text-center">23-12-2025</td>
              <td className="p-4 text-slate-500 text-center">18-12-2025</td>
              <td className="p-4 font-black text-slate-800 text-right pr-6">₹ 5,500.00</td>
              <td className="p-4 text-center text-slate-300">---</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Convert Button */}
      <div className="mt-8 flex justify-end">
        <button 
          onClick={onConvert} 
          className="bg-white border-2 border-[#1e3a3a] text-[#1e3a3a] px-10 py-3 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-[#1e3a3a] hover:text-white transition-all shadow-xl shadow-slate-100 flex items-center gap-2 group"
        >
          Convert To Order <CheckCircle2 size={16} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* ================== MODAL FORM WITH PROPOSAL TYPE ================== */}
      {showForm && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-md flex items-center justify-center z-[999] p-4">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="bg-[#1e3a3a] p-6 flex justify-between items-center text-white">
              <h3 className="font-bold text-sm uppercase tracking-widest">Add New Proposal</h3>
              <button 
                onClick={() => setShowForm(false)} 
                className="hover:bg-white/10 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>
            
            <form className="p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Proposal Type Field */}
              <div className="relative">
                <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">
                  Proposal Type
                </label>
                <div className="relative">
                  <select className="w-full border border-slate-200 rounded-2xl p-3.5 text-sm outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1e3a3a]/10 transition-all appearance-none cursor-pointer pr-10">
                    <option value="">Select Type</option>
                    <option value="standard">Standard Proposal</option>
                    <option value="service">Service Quote</option>
                    <option value="amc">AMC Proposal</option>
                    <option value="discount">Discounted Proposal</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                </div>
              </div>

              {/* Proposal Title */}
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">
                  Proposal Title
                </label>
                <input 
                  className="w-full border border-slate-200 rounded-2xl p-3.5 text-sm outline-none bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#1e3a3a]/10 transition-all" 
                  placeholder="e.g. Annual Maintenance Contract"
                />
              </div>
              
              {/* Amount and Date Grid */}
              <div className="grid grid-cols-2 gap-5">
                <div>
                   <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Amount</label>
                   <div className="relative">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">₹</span>
                     <input 
                       type="number" 
                       className="w-full border border-slate-200 rounded-2xl p-3.5 pl-8 text-sm outline-none bg-slate-50" 
                       placeholder="0.00"
                     />
                   </div>
                </div>
                <div>
                   <label className="text-[10px] font-black text-slate-400 uppercase mb-2 block tracking-widest">Date</label>
                   <input 
                     type="date" 
                     className="w-full border border-slate-200 rounded-2xl p-3.5 text-sm outline-none bg-slate-50"
                   />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 flex gap-4">
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)} 
                  className="flex-1 px-4 py-4 rounded-2xl text-[11px] font-black uppercase text-slate-400 hover:bg-slate-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-4 py-4 bg-emerald-600 text-white rounded-2xl text-[11px] font-black uppercase shadow-lg shadow-emerald-100 hover:bg-emerald-700 transition-all"
                >
                  Save Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}