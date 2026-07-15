import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

import Dashboard from "./pages/Dashboard";

function Placeholder({ title }: { title: string }) {
  return (
    <div className="p-8 text-white text-2xl">
      {title}
    </div>
  );
}

export default function App() {
  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />

        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<Placeholder title="History" />} />
            <Route path="/controls" element={<Placeholder title="Controls" />} />
            <Route path="/settings" element={<Placeholder title="Settings" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}