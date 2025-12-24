<<<<<<< HEAD
=======

>>>>>>> bf32d59 (made pages)
import React from 'react';
import { Plus } from 'lucide-react';

export default function ClientForm() {
  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-semibold mb-6 text-gray-800">Client Master</h2>

      {/* Form Grid - 4 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Client Name <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Client Name" className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Company Name</label>
          <input type="text" placeholder="Company Name" className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Contact Number <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Contact Number" className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Mail Id</label>
          <input type="email" placeholder="Mail Id" className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </div>

       
        <div>
          <label className="block text-sm text-gray-600 mb-1">Address <span className="text-red-500">*</span></label>
          <input type="text" placeholder="Address" className="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-teal-500" />
        </div>
       
       

       
       
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-[#1a3a3a] text-white px-10 py-2 rounded-md shadow-sm hover:bg-opacity-90">
          Save
        </button>
        <button className="bg-[#e2e8f0] text-gray-700 px-10 py-2 rounded-md shadow-sm hover:bg-gray-300">
          Cancel
        </button>
      </div>
    </div>
  );
}