import React from "react";
import { Search, Pencil, Trash2, Filter } from "lucide-react";
import ClientForm from "./ClientForm";

export default function ClientList() {
  // Sample Data
  const clients = [
    {
      id: 1,
      name: "36-FORT",
      mail: "-",
      phone: "8059411194",
      address: "NEAR CSIT COLLAGE VILLAGE- KOLIHAPURI DURG",
      company: "FORT SOLUTIONS"
    },
    {
      id: 2,
      name: "ABC PVT LTD",
      mail: "contact@abc.com",
      phone: "9876543210",
      address: "MIDC INDUSTRIAL AREA, PUNE",
      company: "ABC GROUP"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Render Form */}
        <ClientForm />

        {/* Table Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          
          {/* List Header & Search */}
          <div className="p-4 flex flex-col md:flex-row justify-between items-center gap-4 border-b">
            <h3 className="text-lg font-bold text-gray-700">Client Directory</h3>
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search size={18} className="text-gray-400" />
              </span>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-teal-500 sm:text-sm transition-all"
                placeholder="Search clients..."
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a3a3a] text-white">
                  <th className="p-4 font-semibold text-sm border-r border-teal-800">Name</th>
                  <th className="p-4 font-semibold text-sm border-r border-teal-800">Mail ID</th>
                  <th className="p-4 font-semibold text-sm border-r border-teal-800">Phone No</th>
                  <th className="p-4 font-semibold text-sm border-r border-teal-800">Address</th>
                  <th className="p-4 font-semibold text-sm border-r border-teal-800">Company Name</th>
                  <th className="p-4 font-semibold text-sm text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm divide-y divide-gray-100">
                {clients.map((client) => (
                  <tr key={client.id} className="hover:bg-teal-50/30 transition-colors">
                    <td className="p-4 font-bold text-gray-800">{client.name}</td>
                    <td className="p-4 italic">{client.mail}</td>
                    <td className="p-4 font-medium">{client.phone}</td>
                    <td className="p-4 uppercase text-[12px] leading-relaxed max-w-[250px]">
                      {client.address}
                    </td>
                    <td className="p-4">{client.company}</td>
                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button title="Edit" className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                          <Pencil size={16} />
                        </button>
                        <button title="Delete" className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer Info */}
          <div className="p-4 bg-gray-50 border-t text-xs text-gray-400 text-right">
            Showing {clients.length} registered clients
          </div>
        </div>
      </div>
    </div>
  );
}