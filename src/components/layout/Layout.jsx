import React from "react";
import TopNavbar from "./TopNavbar";


// Optional default sidebar data
const defaultSidebarData = [
  { number: 12, label: "Enquiries", color: "text-blue-500" },
  { number: 8, label: "Leads", color: "text-green-500" },
  { number: 5, label: "Clients", color: "text-orange-500" },
];

export default function Layout({ children, sidebarData = defaultSidebarData }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
