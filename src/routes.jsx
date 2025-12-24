import { Routes, Route, Navigate } from "react-router-dom";

// Dashboard
import Dashboard from "./components/pages/Dashboard/Dashboard";

// Main Modules
import EnquiryList from "./components/pages/enquiries/EnquiryList";
import OrderList from "./components/pages/orders/OrderList";
import TaskList from "./components/pages/tasks/TaskList";
import InventoryList from "./components/pages/inventory/InventoryList";
import PaymentList from "./components/pages/payments/PaymentList";

// Masters
import CategoryList from "./components/pages/masters/category/CategoryList";
import ClientList from "./components/pages/masters/client/ClientList";
import UserList from "./components/pages/masters/user/UserList";
import AddEnquiry from "./components/pages/enquiries/AddEnquiry";





export default function RoutesConfig() {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
      

      {/* Main */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/enquiries" element={<EnquiryList />} />
      <Route path="/enquiries" element={<AddEnquiry />} />
      <Route path="/orders" element={<OrderList />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/inventory" element={<InventoryList />} />
      <Route path="/payments" element={<PaymentList />} />

      {/* Masters */}
      <Route path="/masters/category" element={<CategoryList />} />
      <Route path="/masters/client" element={<ClientList />} />
      <Route path="/masters/user" element={<UserList />} />
      
      
      
      {/* Fallback */}
      <Route
        path="*"
        element={
          <div className="p-6 text-red-600 font-semibold">
            Page Not Found
          </div>
        }
      />
    </Routes>
  );
}
