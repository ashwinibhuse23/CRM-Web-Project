import React, { useState } from "react";
import Sidebar from "../../layout/Sidebar";
import AddTask from "./AddTask";

const tasks = [
  {
    id: 1,
    title: "Follow up with client",
    assignedTo: "John Doe",
    status: "Pending",
    dueDate: "2025-12-25",
  },
  {
    id: 2,
    title: "Prepare sales report",
    assignedTo: "Jane Smith",
    status: "Completed",
    dueDate: "2025-12-22",
  },
  {
    id: 3,
    title: "Schedule demo call",
    assignedTo: "Mike Johnson",
    status: "In Progress",
    dueDate: "2025-12-24",
  },
  {
    id: 4,
    title: "Update CRM records",
    assignedTo: "Sarah Lee",
    status: "Pending",
    dueDate: "2025-12-26",
  },
];

const sidebarData = [
  { number: 12, label: "Total Tasks", color: "text-blue-600" },
  { number: 8, label: "Pending Tasks", color: "text-orange-500" },
  { number: 4, label: "Completed Tasks", color: "text-green-600" },
];

const statusColor = {
  Completed: "text-green-600 font-semibold",
  Pending: "text-red-500 font-semibold",
  "In Progress": "text-yellow-600 font-semibold",
};

export default function TaskList() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

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

            <button
              onClick={() => setIsAddTaskOpen(true)}
              className="bg-[#27314B] text-white px-5 py-2 rounded"
            >
              + Add Task
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#27314B] text-white text-left">
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Task</th>
                  <th className="px-4 py-3">Assigned To</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Due Date</th>
                </tr>
              </thead>

              <tbody>
                {tasks.map((t, i) => (
                  <tr
                    key={t.id}
                    className={`border-b ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-4 py-3">{t.id}</td>
                    <td className="px-4 py-3">{t.title}</td>
                    <td className="px-4 py-3">{t.assignedTo}</td>
                    <td className={`px-4 py-3 ${statusColor[t.status]}`}>
                      {t.status}
                    </td>
                    <td className="px-4 py-3">{t.dueDate}</td>
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

      {/* Add Task Modal */}
      {isAddTaskOpen && <AddTask onClose={() => setIsAddTaskOpen(false)} />}
    </div>
  );
}