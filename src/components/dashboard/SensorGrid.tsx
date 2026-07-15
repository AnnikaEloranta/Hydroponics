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
  import { useSensors } from "../../context/SensorContext";
  
  export default function SensorGrid() {
    const { sensors } = useSensors();
  
    const sensorData = [
      {
        title: "Air Temperature",
        value: sensors.airTemp.toFixed(1),
        unit: "°C",
        status: "Normal",
        color: "text-green-400",
        icon: Thermometer,
      },
      {
        title: "Water Temperature",
        value: sensors.waterTemp.toFixed(1),
        unit: "°C",
        status: "Normal",
        color: "text-cyan-400",
        icon: Thermometer,
      },
      {
        title: "Humidity",
        value: sensors.humidity.toString(),
        unit: "%",
        status: "Optimal",
        color: "text-blue-400",
        icon: Droplets,
      },
      {
        title: "pH",
        value: sensors.ph.toFixed(2),
        status: "Perfect",
        color: "text-green-400",
        icon: FlaskConical,
      },
      {
        title: "EC",
        value: sensors.ec.toFixed(2),
        unit: "mS/cm",
        status: "Optimal",
        color: "text-green-400",
        icon: Activity,
      },
      {
        title: "Water Level",
        value: sensors.waterLevel.toFixed(1),
        unit: "%",
        status: sensors.waterLevel > 30 ? "Good" : "Low",
        color:
          sensors.waterLevel > 30
            ? "text-cyan-400"
            : "text-yellow-400",
        icon: Waves,
      },
      {
        title: "Lights",
        value: sensors.lights ? "ON" : "OFF",
        status: sensors.lights ? "Running" : "Off",
        color: sensors.lights
          ? "text-yellow-400"
          : "text-slate-400",
        icon: Lightbulb,
      },
      {
        title: "Pump",
        value: sensors.pump ? "ON" : "OFF",
        status: sensors.pump ? "Healthy" : "Stopped",
        color: sensors.pump
          ? "text-green-400"
          : "text-red-400",
        icon: Gauge,
      },
      {
        title: "Fan Speed",
        value: sensors.fan.toString(),
        unit: "%",
        status: "Auto",
        color: "text-blue-400",
        icon: Fan,
      },
    ];
  
    return (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {sensorData.map((sensor) => (
          <SensorCard
            key={sensor.title}
            sensor={sensor}
          />
        ))}
      </div>
    );
  }