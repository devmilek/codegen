import { CornerRadius } from "@/types";
import { create } from "zustand";

interface UseQrStoreProps {
  value: string;
  setValue: (value: string) => void;

  bgColor: string;
  setBgColor: (bg: string) => void;

  dotsColor: string;
  setDotsColor: (bg: string) => void;

  eyeRadiusOuter: CornerRadius;
  setEyeRadiusOuter: (value: CornerRadius) => void;

  eyeRadiusInner: CornerRadius;
  setEyeRadiusInner: (value: CornerRadius) => void;
}

export const useQrStore = create<UseQrStoreProps>((set) => ({
  value: "",
  setValue: (val) => set({ value: val }),

  bgColor: "#FFFFFF",
  setBgColor: (bg) => set({ bgColor: bg }),

  dotsColor: "#000000",
  setDotsColor: (color) => set({ dotsColor: color }),

  eyeRadiusOuter: [0, 0, 0, 0],
  setEyeRadiusOuter: (value) => set({ eyeRadiusOuter: value }),

  eyeRadiusInner: [0, 0, 0, 0],
  setEyeRadiusInner: (value) => set({ eyeRadiusInner: value }),
}));
