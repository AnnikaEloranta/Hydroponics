import { Wifi } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-slate-800 border-b border-slate-700 px-8 py-5">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Hydroponics Dashboard
        </h1>

        <p className="text-slate-400">
          Monitor and control your grow system
        </p>
      </div>

      <div className="flex items-center gap-2 text-green-400">
        <Wifi size={20} />
        Connected
      </div>
    </header>
  );
}