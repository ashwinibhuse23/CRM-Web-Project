import React from "react";

export default function AddEnquiry({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-5xl rounded-xl p-6 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Add Enquiry</h2>
          <span className="border px-3 py-1 rounded text-sm">
            22/12/2025
          </span>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input className="input" placeholder="Client Name *" />
          <input className="input" placeholder="Company Name" />
          <input className="input" placeholder="Contact Number" />

          <input className="input md:col-span-2" placeholder="Mail ID" />
          <select className="input">
            <option>Site Name</option>
            <option>Pune</option>
            <option>Nigdi</option>
          </select>

          <textarea
            className="input md:col-span-3"
            placeholder="Address"
            rows="2"
          />

          <input
            className="input md:col-span-2"
            placeholder="Assign Enquiry *"
          />
          <input className="input" placeholder="Enquiry For *" />

          <textarea
            className="input md:col-span-3"
            placeholder="Enquiry Description"
            rows="3"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-[#27314B] text-white px-8 py-2 rounded">
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-8 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
