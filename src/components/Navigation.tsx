import React from "react";
import { NavLink } from "react-router-dom";
import { Home, CreditCard, Send, ListOrdered, User } from "lucide-react";

const linkClass = "flex flex-col items-center p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700";
const activeLinkClass = "text-blue-600 dark:text-blue-400";
const iconClass = "w-6 h-6";

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-16 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex items-center justify-around h-full">
        <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>
          <Home className={iconClass} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink to="/cards" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>
          <CreditCard className={iconClass} />
          <span className="text-xs mt-1">Cards</span>
        </NavLink>
        <NavLink to="/send" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>
          <Send className={iconClass} />
          <span className="text-xs mt-1">Send</span>
        </NavLink>
        <NavLink to="/transactions" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>
          <ListOrdered className={iconClass} />
          <span className="text-xs mt-1">History</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ""}`}>
          <User className={iconClass} />
          <span className="text-xs mt-1">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
}