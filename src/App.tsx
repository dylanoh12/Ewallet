import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Dashboard } from "./pages/Dashboard";
import { Transactions } from "./pages/Transactions";
import { Cards } from "./pages/Cards";
import { Profile } from "./pages/Profile";
import { Send } from "./pages/Send";
import { DarkModeProvider } from './contexts/DarkModeContext';

export function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="fixed inset-0 w-full h-full max-w-[430px] mx-auto bg-gray-50 dark:bg-gray-900 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/send" element={<Send />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Navigation />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;