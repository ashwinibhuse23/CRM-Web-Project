// src/config/navbarConfig.js
import { 
  FiHome, 
  FiPhone, 
  FiShoppingCart, 
  FiFolder, 
  FiCheckSquare, 
  FiPackage, 
  FiDollarSign, 
  FiUser, 
  FiUsers, 
  FiLayers 
} from "react-icons/fi";

export const navbarMenus = [
  { label: "Dashboard", icon: FiHome, path: "/dashboard" },
  { label: "Enquiries", icon: FiPhone, path: "/enquiries" },
  { label: "Orders", icon: FiShoppingCart, path: "/orders" },
  { 
    label: "Masters", 
    icon: FiFolder, 
    dropdown: [
      { label: "Category", icon: FiLayers, path: "/masters/category" },
      { label: "Client", icon: FiUser, path: "/masters/client" },
      { label: "User", icon: FiUsers, path: "/masters/user" },
    ],
  },
  { label: "Tasks", icon: FiCheckSquare, path: "/tasks" },
  { label: "Inventory", icon: FiPackage, path: "/inventory" },
  { label: "Payments", icon: FiDollarSign, path: "/payments" },
];
