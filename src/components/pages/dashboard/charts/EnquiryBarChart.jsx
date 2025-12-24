import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", enquiries: 120, conversions: 60 },
  { month: "Feb", enquiries: 150, conversions: 90 },
  { month: "Mar", enquiries: 100, conversions: 70 },
];

export default function EnquiryBarChart() {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md h-80">
      <h3 className="font-semibold text-gray-700 mb-4">Enquiries vs Conversions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="enquiries" fill="#3b82f6" />
          <Bar dataKey="conversions" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
