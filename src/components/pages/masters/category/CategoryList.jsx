import { useState } from "react";
import { categories as initialData } from "../../../../config/categoryData";
import CategoryForm from "./CategoryForm";
import { Plus, Edit2 } from "lucide-react";

export default function CategoryList() {
  const [data, setData] = useState(initialData);
  const [openForm, setOpenForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  const filtered = data.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const saveCategory = (cat) => {
    setData(prev =>
      prev.some(i => i.id === cat.id)
        ? prev.map(i => i.id === cat.id ? cat : i)
        : [...prev, cat]
    );
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-semibold">Category Master</h1>
        <button
          onClick={() => { setEditData(null); setOpenForm(true); }}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          <Plus size={18} /> Add Category
        </button>
      </div>

      {/* Search */}
      <input
        className="mb-4 border px-3 py-2 rounded-lg w-64"
        placeholder="Search category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Table */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Category Name</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(cat => (
              <tr key={cat.id} className="border-t">
                <td className="p-3">{cat.name}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded text-xs
                    ${cat.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-600"}`}>
                    {cat.status}
                  </span>
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => {
                      setEditData(cat);
                      setOpenForm(true);
                    }}
                    className="text-blue-600"
                  >
                    <Edit2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {openForm && (
        <CategoryForm
          onClose={() => setOpenForm(false)}
          onSave={saveCategory}
          editData={editData}
        />
      )}
    </div>
  );
}
