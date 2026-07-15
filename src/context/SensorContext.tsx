import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react";
import type { ReactNode } from "react";
  
  export interface SensorData {
    airTemp: number;
    waterTemp: number;
    humidity: number;
    ph: number;
    ec: number;
    waterLevel: number;
  
    pump: boolean;
    lights: boolean;
    fan: number;
  }
  
  interface SensorContextType {
    sensors: SensorData;
  }
  
  const SensorContext = createContext<SensorContextType | undefined>(
    undefined
  );
  
  export function SensorProvider({
    children,
  }: {
    children: ReactNode;
  }) {
    const [sensors, setSensors] = useState<SensorData>({
      airTemp: 23.4,
      waterTemp: 21.8,
      humidity: 62,
      ph: 6.12,
      ec: 1.84,
      waterLevel: 87,
  
      pump: true,
      lights: true,
      fan: 45,
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        setSensors((prev) => ({
          ...prev,
  
          airTemp: +(prev.airTemp + (Math.random() - 0.5) * 0.3).toFixed(1),
  
          waterTemp: +(prev.waterTemp + (Math.random() - 0.5) * 0.2).toFixed(1),
  
          humidity: Math.max(
            40,
            Math.min(
              90,
              +(prev.humidity + (Math.random() - 0.5) * 2).toFixed(0)
            )
          ),
  
          ph: +(prev.ph + (Math.random() - 0.5) * 0.03).toFixed(2),
  
          ec: +(prev.ec + (Math.random() - 0.5) * 0.02).toFixed(2),
  
          waterLevel: Math.max(
            0,
            Math.min(
              100,
              +(prev.waterLevel - Math.random() * 0.05).toFixed(1)
            )
          ),
        }));
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <SensorContext.Provider value={{ sensors }}>
        {children}
      </SensorContext.Provider>
    );
  }
  
  export function useSensors() {
    const context = useContext(SensorContext);
  
    if (!context) {
      throw new Error(
        "useSensors must be used inside SensorProvider"
      );
    }
  
    return context;
  }