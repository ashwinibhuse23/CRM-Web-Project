import {
  Users,
  Briefcase,
  CheckCircle,
  ClipboardList,
  CalendarCheck,
  CreditCard,
  IndianRupee,
  UserCheck
} from "lucide-react";

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";

const kpis = [
  { title: "Total Enquiries", value: 1240, icon: Users },
  { title: "Active Leads", value: 320, icon: Briefcase },
  { title: "Converted Sales", value: 86, icon: CheckCircle },
  { title: "Pending Tasks", value: 18, icon: ClipboardList },
  { title: "Today's Follow-ups", value: 12, icon: CalendarCheck },
  { title: "Pending Payments", value: "₹2.4L", icon: CreditCard },
  { title: "Monthly Revenue", value: "₹8.9L", icon: IndianRupee },
  { title: "Employees Present", value: 42, icon: UserCheck },
];

const enquiryData = [
  { name: "Jan", enquiry: 120, converted: 45 },
  { name: "Feb", enquiry: 150, converted: 60 },
  { name: "Mar", enquiry: 180, converted: 75 },
  { name: "Apr", enquiry: 140, converted: 55 },
];

const revenueData = [
  { month: "Jan", revenue: 5 },
  { month: "Feb", revenue: 6.2 },
  { month: "Mar", revenue: 7.5 },
  { month: "Apr", revenue: 8.9 },
];

const taskData = [
  { name: "Pending", value: 18 },
  { name: "In Progress", value: 25 },
  { name: "Completed", value: 57 },
];

const pieColors = ["#E5E7EB", "#93C5FD", "#2563EB"];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">

      {/* ================= HEADER ================= */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">
        Dashboard Overview
      </h1>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {kpis.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between
                         hover:shadow-sm transition-all"
            >
              <div>
                <p className="text-sm text-gray-500 mb-1">{item.title}</p>
                <p className="text-xl font-semibold text-gray-900">
                  {item.value}
                </p>
              </div>
              <Icon className="w-8 h-8 text-blue-600 opacity-70" />
            </div>
          );
        })}
      </div>

      {/* ================= CHARTS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

        {/* Enquiry vs Conversion */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Enquiries vs Conversions
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={enquiryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="enquiry" fill="#93C5FD" />
              <Bar dataKey="converted" fill="#2563EB" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Revenue */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Monthly Revenue (₹ Lakh)
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563EB"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Task Status */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Task Status
          </h2>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={taskData} dataKey="value" outerRadius={90}>
                {taskData.map((_, i) => (
                  <Cell key={i} fill={pieColors[i]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Notifications */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">
            Notifications
          </h2>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>🔴 3 Tasks overdue</li>
            <li>🟠 5 Payments pending</li>
            <li>🔵 4 Follow-ups today</li>
            <li>🟢 2 Leave requests pending</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
