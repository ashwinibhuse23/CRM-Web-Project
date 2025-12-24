import React from "react";
import { ShoppingCart } from "lucide-react";

/* ================= Dummy Order Data ================= */
const orders = [
  {
    id: "ORD20250901",
    proposalId: "PROP2025001",
    date: "24-12-2025",
    customer: "test sagar",
    amount: "₹ 5,500.00",
    status: "Confirmed",
  },
];

export default function OrderTab() {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">Order History</h2>
        <div className="flex gap-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            {orders.length} Active Orders
          </span>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full border-collapse bg-white text-left text-[13px]">
          <thead className="bg-[#27314B] text-white">
            <tr>
              <th className="p-3 font-semibold uppercase text-[11px] tracking-wider">Order ID</th>
              <th className="p-3 font-semibold uppercase text-[11px] tracking-wider">Proposal ID</th>
              <th className="p-3 font-semibold uppercase text-[11px] tracking-wider">Customer</th>
              <th className="p-3 font-semibold uppercase text-[11px] tracking-wider">Order Date</th>
              <th className="p-3 font-semibold uppercase text-[11px] tracking-wider">Amount</th>
              <th className="p-3 font-semibold uppercase text-[11px] tracking-wider text-center">Status</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-100">
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-3 font-bold text-gray-800">{order.id}</td>
                  <td className="p-3 text-gray-500">{order.proposalId}</td>
                  <td className="p-3 text-gray-600">{order.customer}</td>
                  <td className="p-3 text-gray-600">{order.date}</td>
                  <td className="p-3 font-bold text-gray-800">{order.amount}</td>
                  <td className="p-3 text-center">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold uppercase">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-10 text-center text-gray-400">
                  <ShoppingCart className="mx-auto mb-2 opacity-20" size={40} />
                  <p>No Orders created yet</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="mt-5 flex items-center justify-end border-t pt-4">
        <div className="text-right">
          <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Total Order Value</p>
          <p className="text-xl font-black text-gray-800">₹ 5,500.00</p>
        </div>
      </div>
    </div>
  );
}