import React, { useState } from "react";
import { ChevronDown, MapPin, User, Trash2, Activity, FileText, CheckCircle2 } from "lucide-react";

import QuotationTab from "./tabs/ProposalTab"; 
import OrderTab from "./tabs/OrderTab";
import InvoiceTab from "./tabs/InvoiceTab";

export default function EnquiryDetails() {
  const [activeTab, setActiveTab] = useState("Proposal");
  const steps = ["Proposal", "Order", "Invoice"];

  return (
    <div className="p-6 bg-[#f8fafc] min-h-screen font-sans text-slate-800">
      <div className="grid grid-cols-12 gap-6 items-start max-w-[1600px] mx-auto">
        
        {/* ================== LEFT COLUMN (Details) ================== */}
        <div className="col-span-3 space-y-5">
          {/* Client Details Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 bg-slate-50/50 flex items-center gap-2 border-b border-slate-100 font-bold text-[11px] uppercase tracking-widest text-slate-500">
              <ChevronDown size={14} /> Client Details
            </div>
            <div className="p-5 space-y-3 text-[12px]">
              <div className="flex justify-between border-b border-slate-50 pb-2"><span className="text-slate-400">Client Name</span> <span className="font-bold text-slate-700">test sagar</span></div>
              <div className="flex justify-between border-b border-slate-50 pb-2"><span className="text-slate-400">Contact No</span> <span className="font-bold text-slate-700">1234567890</span></div>
              <div className="flex justify-between border-b border-slate-50 pb-2"><span className="text-slate-400">Mail ID</span> <span className="font-medium text-blue-600 underline">sagar@gmail.com</span></div>
              <div className="flex justify-between border-b border-slate-50 pb-2"><span className="text-slate-400">GST No</span> <span className="font-bold text-slate-600">223454123443</span></div>
              <div className="flex justify-between pb-1"><span className="text-slate-400">Address</span> <span className="font-medium text-slate-700 uppercase">pune</span></div>
              <div className="text-[#1e3a3a] flex items-center gap-2 font-bold mt-2 text-[11px] cursor-pointer hover:bg-slate-50 p-2.5 rounded-lg border border-slate-100 transition-all"><MapPin size={14} /> Nigdi Office</div>
            </div>
          </div>

          {/* Enquiry Details Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-4 bg-slate-50/50 flex items-center gap-2 border-b border-slate-100 font-bold text-[11px] uppercase tracking-widest text-slate-500">
              <ChevronDown size={14} /> Enquiry Details
            </div>
            <div className="p-5 space-y-3 text-[12px]">
              <div className="flex justify-between items-center"><span className="text-slate-400">Status</span> <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-bold text-[10px] tracking-wide">PAID</span></div>
              <div className="flex justify-between border-b border-slate-50 pb-2"><span className="text-slate-400">Date</span> <span className="font-bold text-slate-700">18-12-2025</span></div>
              <div className="flex items-center gap-3 font-bold text-slate-700 py-3 border-t border-slate-100 mt-2">
                <div className="w-8 h-8 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center border border-slate-200"><User size={16} /></div>
                <div>
                  <p className="leading-none uppercase tracking-tight text-[11px]">test_man manager</p>
                  <p className="text-[9px] text-slate-400 font-medium">Primary Contact</p>
                </div>
              </div>
              <div className="pt-2">
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Assigned Technician</label>
                <div className="bg-slate-50 border border-dashed border-slate-300 p-3 rounded-xl flex justify-between items-center text-[11px] font-bold text-slate-500 hover:border-[#1e3a3a] hover:text-[#1e3a3a] cursor-pointer transition-all group">
                  Assign To <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================== CENTER COLUMN (Stepper & Tabs) ================== */}
        <div className="col-span-6 space-y-6">
          {/* MODERN STEPPER */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between w-full max-w-4xl mx-auto relative px-4">
              {steps.map((step, index) => {
                const isInvoiceActive = activeTab === "Invoice";
                const isCompleted = steps.indexOf(activeTab) > index || (isInvoiceActive && step === "Invoice");
                const isActive = activeTab === step && !isInvoiceActive;

                return (
                  <div key={step} className="flex flex-col items-center relative z-10 flex-1 cursor-pointer group" onClick={() => setActiveTab(step)}>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full shadow-sm mb-2 transition-all duration-500 ${isCompleted ? "bg-emerald-500 ring-4 ring-emerald-50 shadow-emerald-200" : isActive ? "bg-[#1e3a3a] scale-110 ring-4 ring-slate-100" : "bg-white border border-slate-200 text-slate-300"}`}>
                      {isCompleted ? <span className="text-white text-[14px] font-bold">✓</span> : isActive ? <div className="w-2 h-2 bg-white rounded-full animate-pulse" /> : <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />}
                    </div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-300 ${isActive || isCompleted ? "text-slate-800" : "text-slate-300"}`}>{step}</span>
                    {index !== steps.length - 1 && (
                      <div className="absolute top-[15px] left-[50%] w-full h-[3px] -z-10 px-4">
                        <div className={`h-full w-full rounded-full transition-all duration-700 ${isCompleted ? "bg-emerald-500" : "bg-slate-100"}`}></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* DYNAMIC TAB CONTENT */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 min-h-[580px]">
            {activeTab === "Proposal" && <QuotationTab onConvert={() => setActiveTab("Order")} />}
            {activeTab === "Order" && <OrderTab onConvert={() => setActiveTab("Invoice")} />}
            {activeTab === "Invoice" && <InvoiceTab />}
          </div>
        </div>

        {/* ================== RIGHT COLUMN (Enhanced Activity) ================== */}
        <div className="col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[700px]">
          <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-[13px] flex items-center gap-2 text-slate-700 uppercase tracking-tighter">
              <Activity size={16} className="text-[#1e3a3a]"/> Operational Logs
            </h3>
            <div className="flex gap-1 items-center">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[8px] font-bold text-slate-400 uppercase">Live</span>
            </div>
          </div>

          <div className="p-5 space-y-6 overflow-y-auto custom-scrollbar flex-grow bg-white">
            {/* Approval Log */}
            <div className="relative pl-6">
              <div className="absolute left-[7px] top-1 bottom-[-24px] w-[2px] bg-slate-100"></div>
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center border-2 border-white shadow-sm ring-4 ring-emerald-50/50">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              </div>
              <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm border-l-4 border-l-emerald-500 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-[10px] text-slate-800 uppercase tracking-widest">Approval Granted</h4>
                </div>
                <div className="grid grid-cols-1 gap-1.5 mt-2 bg-slate-50/50 p-3 rounded-xl border border-dashed border-slate-200 text-[11px]">
                    <div className="flex justify-between">
                        <span className="text-slate-400">Challan:</span>
                        <span className="font-mono font-bold text-slate-700">CHN20250469</span>
                    </div>
                    <div className="flex justify-between font-bold text-emerald-600 border-t border-slate-100 pt-1 mt-1">
                        <span>Amount:</span>
                        <span>₹ 12,450.00</span>
                    </div>
                </div>
                <p className="text-[9px] text-slate-400 mt-3 font-medium">Dec 18, 12:33 PM • Admin</p>
              </div>
            </div>

            {/* Proposal Log */}
            <div className="relative pl-6">
              <div className="absolute left-[7px] top-1 bottom-[-24px] w-[2px] bg-slate-100"></div>
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center border-2 border-white shadow-sm">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              </div>
              <div className="p-2">
                <h4 className="font-black text-[10px] text-slate-700 uppercase tracking-widest">Proposal Dispatched</h4>
                <p className="text-[11px] text-slate-500 mt-1">Quotation #PROP2025001 sent to sagar@gmail.com</p>
                <p className="text-[9px] text-slate-400 mt-2 font-bold uppercase">Dec 18, 11:15 AM</p>
              </div>
            </div>

            {/* System Entry Log */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white shadow-sm">
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
              </div>
              <div className="p-2">
                <h4 className="font-black text-[10px] text-slate-400 uppercase tracking-widest">Enquiry Created</h4>
                <p className="text-[9px] text-slate-400 mt-1 italic font-medium">Dec 17, 04:30 PM via Web Portal</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50/50 border-t border-slate-100 text-center">
            <button className="text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-[#1e3a3a] transition-colors">View Audit Trail</button>
          </div>
        </div>
      </div>
    </div>
  );
}