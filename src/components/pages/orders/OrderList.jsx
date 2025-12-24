import React from "react";
import Sidebar from "../../layout/Sidebar";

const orders = [
  {
    id: "ORD20250140",
    date: "16-12-2025",
    client: "test sagar",
    phone: "1234567890",
    assignedTo: "Rohit Sharma",
    total: 10012,
    status: "Completed",
  },
  {
    id: "ORD20250139",
    date: "12-12-2025",
    client: "test sagar",
    phone: "1234567890",
    assignedTo: "Sonia Verma",
    total: 86087,
    status: "Completed",
  },
  {
    id: "ORD20250138",
    date: "12-12-2025",
    client: "36-FORT",
    phone: "8059411194",
    assignedTo: "A.K. Mishra",
    total: 28126,
    status: "Completed",
  },
  {
    id: "ORD20250134",
    date: "20-11-2025",
    client: "PAWAN INDUSTRIES UNIT-I",
    phone: "9713511711",
    assignedTo: "Ankit Jain",
    total: 4720,
    status: "Pending",
  },
];

const sidebarData = [
  { number: 12, label: "Total Orders", color: "text-blue-600" },
  { number: 8, label: "Pending Orders", color: "text-orange-500" },
  { number: 4, label: "Completed Orders", color: "text-green-600" },
];

const statusColor = {
  Completed: "text-green-600 font-semibold",
  Pending: "text-orange-500 font-semibold",
};

export default function OrderList() {
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
              className="border px-4 py-2 rounded w-72"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#27314B] text-white text-left">
                  <th className="px-4 py-3">Order ID</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Client</th>
                  <th className="px-4 py-3">Phone</th>
                  <th className="px-4 py-3">Assigned To</th>
                  <th className="px-4 py-3">Total Amount</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((o, i) => (
                  <tr
                    key={o.id}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3">{o.id}</td>
                    <td className="px-4 py-3">{o.date}</td>
                    <td className="px-4 py-3">{o.client}</td>
                    <td className="px-4 py-3">{o.phone}</td>
                    <td className="px-4 py-3">{o.assignedTo}</td>
                    <td className="px-4 py-3">₹{o.total}</td>
                    <td className={`px-4 py-3 ${statusColor[o.status]}`}>
                      {o.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm text-gray-500">
                Showing 1 to 4 of 12 entries
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