import { useState } from "react";

export default function CategoryForm({ onClose, onSave, editData }) {
  const [name, setName] = useState(editData?.name || "");
  const [status, setStatus] = useState(editData?.status || "Active");

  const handleSubmit = () => {
    if (!name.trim()) return alert("Category name required");

    onSave({
      id: editData?.id || Date.now(),
      name,
      status,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white rounded-xl w-96 p-6">
        <h2 className="text-lg font-semibold mb-4">
          {editData ? "Edit Category" : "Add Category"}
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="w-full border rounded-lg px-3 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>

          <div className="flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
