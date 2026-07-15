import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  History,
  SlidersHorizontal,
  Settings,
  Leaf,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", to: "/", icon: LayoutDashboard },
  { name: "History", to: "/history", icon: History },
  { name: "Controls", to: "/controls", icon: SlidersHorizontal },
  { name: "Settings", to: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white h-screen flex flex-col border-r border-slate-700">
      <div className="flex items-center gap-3 px-6 py-5 text-2xl font-bold border-b border-slate-700">
        <Leaf className="text-green-400" />
        Hydroponics
      </div>

      <nav className="flex flex-col p-3 gap-2">
        {navItems.map(({ name, to, icon: Icon }) => (
          <NavLink
            key={name}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                isActive
                  ? "bg-green-500 text-white"
                  : "hover:bg-slate-700 text-slate-300"
              }`
            }
          >
            <Icon size={20} />
            {name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}