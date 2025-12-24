export default function Table({ headers }) {
  return (
    <table className="w-full border mt-3">
      <thead className="bg-gray-200">
        <tr>
          {headers.map((h, i) => (
            <th key={i} className="border p-2">{h}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
}
