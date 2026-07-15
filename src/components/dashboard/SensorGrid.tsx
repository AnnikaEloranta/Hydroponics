import {
    Thermometer,
    Droplets,
    FlaskConical,
    Activity,
    Waves,
    Lightbulb,
    Fan,
    Gauge,
  } from "lucide-react";
  
  import SensorCard from "./SensorCard";
  
  const sensors = [
    {
      title: "Air Temperature",
      value: "23.5",
      unit: "°C",
      status: "Normal",
      color: "text-green-400",
      icon: Thermometer,
    },
    {
      title: "Humidity",
      value: "61",
      unit: "%",
      status: "Optimal",
      color: "text-blue-400",
      icon: Droplets,
    },
    {
      title: "pH",
      value: "6.12",
      status: "Perfect",
      color: "text-green-400",
      icon: FlaskConical,
    },
    {
      title: "EC",
      value: "1.82",
      unit: "mS",
      status: "Optimal",
      color: "text-green-400",
      icon: Activity,
    },
    {
      title: "Water Level",
      value: "84",
      unit: "%",
      status: "Good",
      color: "text-cyan-400",
      icon: Waves,
    },
    {
      title: "Lights",
      value: "ON",
      status: "Running",
      color: "text-yellow-400",
      icon: Lightbulb,
    },
    {
      title: "Fan",
      value: "45",
      unit: "%",
      status: "Auto",
      color: "text-blue-400",
      icon: Fan,
    },
    {
      title: "Pump",
      value: "ON",
      status: "Healthy",
      color: "text-green-400",
      icon: Gauge,
    },
  ];
  
  export default function SensorGrid() {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        {sensors.map((sensor) => (
          <SensorCard
            key={sensor.title}
            sensor={sensor}
          />
        ))}
      </div>
    );
  }