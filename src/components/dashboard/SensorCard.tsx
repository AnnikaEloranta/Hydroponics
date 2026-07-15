import { motion } from "framer-motion";
import type { Sensor } from "../../types/sensor";

interface Props {
  sensor: Sensor;
}

export default function SensorCard({ sensor }: Props) {
  const Icon = sensor.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      layout
      className="rounded-2xl bg-slate-800 p-6 shadow-lg border border-slate-700"
    >
      <div className="flex justify-between items-center mb-6">
        <Icon
          size={34}
          className={sensor.color}
        />

        <span
          className={`text-sm font-medium ${sensor.color}`}
        >
          {sensor.status}
        </span>
      </div>

      <h3 className="text-slate-400 text-sm">
        {sensor.title}
      </h3>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-4xl font-bold text-white">
          {sensor.value}
        </span>

        {sensor.unit && (
          <span className="text-slate-400 mb-1">
            {sensor.unit}
          </span>
        )}
      </div>
    </motion.div>
  );
}