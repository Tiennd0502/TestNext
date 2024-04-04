import { ReactNode } from "react";

export interface Cell {
  key: string;
  label: string;
  className?: string;
  actionCell?: () => ReactNode;
}
