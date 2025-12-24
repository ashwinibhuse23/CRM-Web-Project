import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", revenue: 200000 },
  { month: "Feb", revenue: 350000 },
  { month: "Mar", revenue: 420000 },
];

export default function RevenueLineChart() {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-md h-80">
      <h3 className="font-semibold text-gray-700 mb-4">Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#16a34a" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
