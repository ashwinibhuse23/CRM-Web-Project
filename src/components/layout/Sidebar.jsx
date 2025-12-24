import React from "react";

const SidebarItem = ({ number, label, color }) => {
  return (
    <div className="bg-white rounded p-4 shadow mb-4 flex flex-col items-start">
      <span className={`text-2xl font-bold ${color}`}>{number}</span>
      <span className="font-semibold mt-1">{label}</span>
    </div>
  );
};

const Sidebar = ({ data = [] }) => {
  return (
    <div className="w-64 p-4 bg-gray-50 min-h-screen flex-shrink-0">
      {/* Optional Date Range */}
      <div className="flex gap-2 mb-6">
        <input type="date" className="border rounded px-2 py-1 w-full" />
        
      </div>

      {/* Sidebar Items */}
      {data.map((item, index) => (
        <SidebarItem
          key={index}
          number={item.number}
          label={item.label}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default Sidebar;
