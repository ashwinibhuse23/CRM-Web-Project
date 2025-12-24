import React, { useState } from 'react';
import { Search, Pencil, Trash2 } from "lucide-react";
import UserForm from "./UserForm";

export default function UserList() {
  // Image madhil sample data add kela ahe
  const [users, setUsers] = useState([
    { id: 1, firstName: "Test", middleName: "mayur", lastName: "-", email: "tm@gmail.com", mobile: "1234567899", address: "Pune", role: "Technician" },
    { id: 2, firstName: "hema", middleName: "DEWANGAN", lastName: "-", email: "hemadewangan44@gmail.com", mobile: "8839831665", address: "shakti nagar durg", role: "Manager" },
    { id: 3, firstName: "rupesh", middleName: "-", lastName: "sahu", email: "rupesar541@gmail.com", mobile: "9630773946", address: "gaya nagar durg", role: "Helper" }
  ]);

  const [formData, setFormData] = useState({
    firstName: '', middleName: '', lastName: '', email: '', mobile: '', role: '', address: ''
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSave = () => {
    if(!formData.firstName || !formData.email || !formData.mobile) {
      alert("Please fill all mandatory fields!");
      return;
    }
    const newUser = { ...formData, id: Date.now() };
    setUsers([newUser, ...users]);
    handleCancel();
  };

  const handleCancel = () => {
    setFormData({ firstName: '', middleName: '', lastName: '', email: '', mobile: '', role: '', address: '' });
  };

  const deleteUser = (id) => {
    if(window.confirm("Delete this user?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Form */}
        <UserForm 
          formData={formData} 
          setFormData={setFormData} 
          onSave={handleSave} 
          onCancel={handleCancel} 
        />

        {/* List Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search User..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-500 outline-none text-sm bg-gray-50"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a3a3a] text-white">
                  <th className="p-3 font-semibold text-sm border-r border-teal-800">First Name</th>
                  <th className="p-3 font-semibold text-sm border-r border-teal-800">Middle Name</th>
                  <th className="p-3 font-semibold text-sm border-r border-teal-800">Last Name</th>
                  <th className="p-3 font-semibold text-sm border-r border-teal-800 text-center">Mail ID</th>
                  <th className="p-3 font-semibold text-sm border-r border-teal-800 text-center">Mobile No</th>
                  <th className="p-3 font-semibold text-sm border-r border-teal-800">Address</th>
                  <th className="p-3 font-semibold text-sm border-r border-teal-800 text-center">User Role</th>
                  <th className="p-3 font-semibold text-sm text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {users.filter(u => u.firstName.toLowerCase().includes(searchTerm.toLowerCase())).map((user) => (
                  <tr key={user.id} className="hover:bg-teal-50/30 transition-colors">
                    <td className="p-3 text-sm text-gray-700 text-center">{user.firstName}</td>
                    <td className="p-3 text-sm text-gray-500 text-center">{user.middleName || "-"}</td>
                    <td className="p-3 text-sm text-gray-700 text-center">{user.lastName}</td>
                    <td className="p-3 text-sm text-gray-500 text-center">{user.email}</td>
                    <td className="p-3 text-sm text-gray-600 text-center">{user.mobile}</td>
                    <td className="p-3 text-sm text-gray-500">{user.address}</td>
                    <td className="p-3 text-sm font-medium text-center">
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">{user.role}</span>
                    </td>
                    <td className="p-3">
                      <div className="flex justify-center gap-3">
                        <button className="text-blue-500 hover:scale-110 transition-transform"><Pencil size={18} /></button>
                        <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:scale-110 transition-transform"><Trash2 size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}