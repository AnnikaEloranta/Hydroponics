import type { LucideIcon } from "lucide-react";

export interface Sensor {
  title: string;
  value: string;
  unit?: string;
  status: string;
  color: string;
  icon: LucideIcon;
}