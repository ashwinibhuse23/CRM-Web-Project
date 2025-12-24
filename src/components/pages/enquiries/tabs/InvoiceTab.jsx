import React from "react";
import { FileText, Download, Eye, Plus } from "lucide-react";

/* ================= Dummy Invoice Data ================= */
const invoices = [
  {
    id: "INV-2025-001",
    orderId: "ORD20250901",
    date: "24-12-2025",
    dueDate: "30-12-2025",
    amount: "₹ 5,500.00",
    status: "Paid",
  },
  {
    id: "INV-2025-002",
    orderId: "ORD20250945",
    date: "25-12-2025",
    dueDate: "02-01-2026",
    amount: "₹ 12,000.00",
    status: "Pending",
  },
];

const InvoiceTab = () => {
  return (
    <div className="relative animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">Invoices</h2>
          <p className="text-xs text-slate-400 font-medium">Billing and payment history</p>
        </div>
        <button className="bg-[#1e3a3a] text-white px-5 py-2 rounded-xl text-[11px] font-bold uppercase flex items-center gap-2 hover:bg-slate-800 shadow-lg shadow-[#1e3a3a]/20 transition-all">
          <Plus size={16} strokeWidth={3}/> Create Invoice
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Billed</p>
          <p className="text-xl font-bold text-slate-800">₹ 17,500.00</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Paid Amount</p>
          <p className="text-xl font-bold text-emerald-600">₹ 5,500.00</p>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Outstanding</p>
          <p className="text-xl font-bold text-rose-500">₹ 12,000.00</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm bg-white">
        <table className="w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="bg-[#1e3a3a] text-white/90 font-bold uppercase text-[10px] tracking-widest">
              <th className="p-4 pl-6">Invoice ID</th>
              <th className="p-4">Order Ref</th>
              <th className="p-4 text-center">Invoice Date</th>
              <th className="p-4 text-center">Due Date</th>
              <th className="p-4 text-right">Amount</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-center pr-6">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-slate-50/80 transition-colors group">
                <td className="p-4 pl-6 font-bold text-slate-700 flex items-center gap-2">
                  <FileText size={14} className="text-slate-300"/> {inv.id}
                </td>
                <td className="p-4 text-slate-500">{inv.orderId}</td>
                <td className="p-4 text-slate-500 text-center">{inv.date}</td>
                <td className="p-4 text-slate-500 text-center">{inv.dueDate}</td>
                <td className="p-4 font-black text-slate-800 text-right">{inv.amount}</td>
                <td className="p-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                    inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="p-4 text-center pr-6">
                  <div className="flex justify-center gap-2">
                    <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-[#1e3a3a] transition-all">
                      <Eye size={16} />
                    </button>
                    <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-all">
                      <Download size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTab;