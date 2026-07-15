import SensorGrid from "../components/dashboard/SensorGrid";

export default function Dashboard() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-slate-400">
          Live monitoring of your hydroponics system
        </p>
      </div>

      <SensorGrid />
    </div>
  );
}