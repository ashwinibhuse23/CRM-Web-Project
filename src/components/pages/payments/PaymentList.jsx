import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";

/* Dummy Payment Data */
const payments = [
  {
    id: "PAY20250121",
    client: "test sagar",
    company: "Test Sagar Pvt Ltd",
    phone: "1234567890",
    mode: "UPI",
    amount: "₹12,000",
    status: "Paid",
  },
  {
    id: "PAY20250118",
    client: "hema dewangan",
    company: "HD Solutions",
    phone: "9876543210",
    mode: "Cash",
    amount: "₹7,500",
    status: "Pending Payment",
  },
];

/* Status Colors */
const statusColor = {
  Paid: "text-green-600 font-semibold",
  "Pending Payment": "text-orange-500 font-semibold",
  Failed: "text-red-500 font-semibold",
};

/* Sidebar Data */
const sidebarData = [
  { number: 10, label: "Total Payments", color: "text-blue-600" },
  { number: 4, label: "Pending Payments", color: "text-orange-500" },
  { number: 5, label: "Completed", color: "text-green-600" },
  { number: 1, label: "Failed", color: "text-red-500" },
];

export default function PaymentList() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar data={sidebarData} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border px-4 py-2 rounded w-72"
            />

            
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#27314B] text-white text-left">
                  <th className="px-4 py-3">Payment ID</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Company</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Payment Mode</th>
                  <th className="px-4 py-3">Amount</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {payments.map((p, i) => (
                  <tr
                    key={p.id}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3">{p.id}</td>
                    <td className="px-4 py-3">{p.client}</td>
                    <td className="px-4 py-3">{p.company}</td>
                    <td className="px-4 py-3">{p.phone}</td>
                    <td className="px-4 py-3">{p.mode}</td>
                    <td className="px-4 py-3 font-medium">{p.amount}</td>
                    <td className={`px-4 py-3 ${statusColor[p.status]}`}>
                      {p.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">
                Showing 1 to 4 of 10 entries
              </p>

              <div className="flex gap-2">
                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">
                  Previous
                </button>

                <button className="px-3 py-1 border rounded bg-[#27314B] text-white">
                  1
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-100">
                  2
                </button>
                <button className="px-3 py-1 border rounded hover:bg-gray-100">
                  3
                </button>

                <button className="px-3 py-1 border rounded text-gray-600 hover:bg-gray-100">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}