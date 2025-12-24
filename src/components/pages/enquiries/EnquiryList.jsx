import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEnquiry from "./AddEnquiry";
import Sidebar from "../../layout/Sidebar";

/* ================= Dummy Enquiry Data ================= */
const enquiries = [
  {
    id: "ENQ20250187",
    client: "test sagar",
    company: "Test sagar",
    phone: "1234567890",
    assign: "test_man manager",
    technician: "Test mayur",
    site: "Nigdi Office",
    enquiryFor: "Website Develop",
    status: "Paid",
  },
  {
    id: "ENQ20250185",
    client: "test sagar",
    company: "Test sagar",
    phone: "1234567890",
    assign: "hema DEWANGAN",
    technician: "rupesh sahu",
    site: "Pune",
    enquiryFor: "Digital Marketing",
    status: "Pending Payment",
  },
];

/* ================= Status Color Map ================= */
const statusColor = {
  Paid: "text-green-600 font-semibold",
  "Pending Payment": "text-orange-500 font-semibold",
  "Pending Invoice": "text-red-500 font-semibold",
};

/* ================= Sidebar Summary ================= */
const sidebarData = [
  { number: 12, label: "Total Enquiries", color: "text-blue-600" },
  { number: 8, label: "Pending Enquiries", color: "text-orange-500" },
  { number: 7, label: "In Progress", color: "text-yellow-600" },
  { number: 4, label: "Completed", color: "text-green-600" },
];

export default function EnquiryList() {
  const [openAdd, setOpenAdd] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ================= Sidebar ================= */}
      <Sidebar data={sidebarData} />

      {/* ================= Main Content ================= */}
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* ===== Header ===== */}
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search Enquiry"
              className="border px-4 py-2 rounded w-72"
            />

            <button
              onClick={() => setOpenAdd(true)}
              className="bg-[#27314B] text-white px-5 py-2 rounded hover:bg-[#1f2740]"
            >
              + Add Enquiry
            </button>
          </div>

          {/* ===== Table ===== */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#27314B] text-white text-left">
                  <th className="px-4 py-3">Enquiry ID</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Assign</th>
                  <th className="px-4 py-3">Technician</th>
                  <th className="px-4 py-3">Site</th>
                  <th className="px-4 py-3">Enquiry For</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((e, i) => (
                  <tr
                    key={e.id}
                    onClick={() => navigate(`/enquiry/${e.id}`)}
                    className={`cursor-pointer border-b hover:bg-blue-50 ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    {/* Enquiry ID - Blue ani Underline kadhle ahe */}
                    <td className="px-4 py-3 text-gray-800 font-medium">
                      {e.id}
                    </td>
                    <td className="px-4 py-3">{e.client}</td>
                    <td className="px-4 py-3">{e.company}</td>
                    <td className="px-4 py-3">{e.phone}</td>
                    <td className="px-4 py-3">{e.assign}</td>
                    <td className="px-4 py-3">{e.technician}</td>
                    <td className="px-4 py-3">{e.site}</td>
                    <td className="px-4 py-3">{e.enquiryFor}</td>
                    <td className={`px-4 py-3 ${statusColor[e.status]}`}>
                      {e.status}
                    </td>
                  </tr>
                ))}

                {enquiries.length === 0 && (
                  <tr>
                    <td
                      colSpan="9"
                      className="text-center py-6 text-gray-500"
                    >
                      No Enquiries Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= Add Enquiry Modal ================= */}
        {openAdd && <AddEnquiry onClose={() => setOpenAdd(false)} />}
      </div>
    </div>
  );
}