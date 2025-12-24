import React from 'react';
import { Save, X, UserPlus } from 'lucide-react';

export default function UserForm({ formData, setFormData, onSave, onCancel }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-[#1a3a3a] px-6 py-3">
        <h2 className="text-white font-semibold text-lg flex items-center gap-2">
           User Master
        </h2>
      </div>

      <div className="p-6">
        {/* Form Grid - 3 Columns (User Master Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-1 focus:ring-teal-600 outline-none text-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName || ''}
              onChange={handleChange}
              placeholder="Middle Name"
              className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-1 focus:ring-teal-600 outline-none text-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-1 focus:ring-teal-600 outline-none text-sm transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mail ID <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              placeholder="Mail ID"
              className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-1 focus:ring-teal-600 outline-none text-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile || ''}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-1 focus:ring-teal-600 outline-none text-sm transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">User Role <span className="text-red-500">*</span></label>
            <select 
              name="role" 
              value={formData.role || ''} 
              onChange={handleChange}
              className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-1 focus:ring-teal-600 outline-none text-sm bg-white"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Technician">Technician</option>
              <option value="Helper">Helper</option>
            </select>
          </div>

          {/* Full Width Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="address"
              value={formData.address || ''}
              onChange={handleChange}
              placeholder="Address"
              className="w-full border border-gray-300 p-2.5 rounded-md focus:ring-1 focus:ring-teal-600 outline-none text-sm transition-all"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 border-t pt-6">
          <button 
            onClick={onSave}
            className="bg-[#1a3a3a] text-white px-12 py-2 rounded-md hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-md font-medium"
          >
            Save
          </button>
          <button 
            onClick={onCancel}
            className="bg-[#e2e8f0] text-gray-700 px-12 py-2 rounded-md hover:bg-gray-300 transition-all font-medium"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}