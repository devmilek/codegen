"use client";

import React from "react";
import { ColorPicker } from "./color-picker";
import { useQrStore } from "@/hooks/use-qr-store";
import { Button } from "./ui/button";
import { CornerRadius } from "@/types";
import { cn } from "@/lib/utils";
import QrPreview from "./qr-preview";
import { ScrollArea } from "./ui/scroll-area";

const ApperanceSidebar = () => {
  const {
    bgColor,
    setBgColor,
    setDotsColor,
    dotsColor,
    setEyeRadiusOuter,
    eyeRadiusOuter,
    eyeRadiusInner,
    setEyeRadiusInner,
  } = useQrStore();

  const markerBorders: { value: CornerRadius; label: string }[] = [
    {
      value: [0, 0, 0, 0],
      label: "pierwszy",
    },
    {
      value: [20, 20, 20, 20],
      label: "drugi",
    },
    {
      value: [999, 999, 999, 999],
      label: "drugi",
    },
    {
      value: [1, 999, 999, 999],
      label: "drugi",
    },
    {
      value: [1, 999, 1, 999],
      label: "drugi",
    },
    {
      value: [1, 20, 1, 20],
      label: "drugi",
    },
  ];

  const test = [0, 0, 0, 0];

  return (
    <aside className="bg-white rounded-lg w-[600px]">
      <ScrollArea className="h-full p-6">
        <h2 className="text-2xl font-semibold mb-3">Preview</h2>
        <QrPreview />
        <h2 className="text-xl font-semibold mt-6 mb-4">Apperance</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-sm mb-2">Background color</h3>
            <ColorPicker
              className="w-full"
              background={bgColor}
              setBackground={setBgColor}
            />
          </div>
          <div>
            <h3 className="font-medium text-sm mb-2">Dots color</h3>
            <ColorPicker
              className="w-full"
              background={dotsColor}
              setBackground={setDotsColor}
            />
          </div>
          <div>
            <h3 className="font-medium text-sm mb-2">Marker border</h3>
            <div className="grid grid-cols-3 gap-4">
              {markerBorders.map((item) => (
                <div
                  key={JSON.stringify(item.value)}
                  onClick={() => {
                    setEyeRadiusOuter(item.value);
                  }}
                  className={cn(
                    "flex items-center justify-center group aspect-square border rounded-lg transition cursor-pointer",
                    JSON.stringify(item.value) ===
                      JSON.stringify(eyeRadiusOuter)
                      ? "border-blue-600 bg-blue-50 hover:bg-blue-100"
                      : "hover:bg-gray-50"
                  )}
                >
                  <div
                    className={cn(
                      "h-8 w-8 border-[6px] transition",
                      JSON.stringify(item.value) ===
                        JSON.stringify(eyeRadiusOuter)
                        ? "border-blue-600"
                        : "group-hover:border-neutral-500"
                    )}
                    style={{
                      borderTopLeftRadius: `${item.value[0] / 2}px`,
                      borderTopRightRadius: `${item.value[1] / 2}px`,
                      borderBottomLeftRadius: `${item.value[3] / 2}px`,
                      borderBottomRightRadius: `${item.value[2] / 2}px`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-2">Marker center</h3>
            <div className="grid grid-cols-3 gap-4">
              {markerBorders.map((item) => (
                <div
                  key={JSON.stringify(item.value)}
                  onClick={() => {
                    setEyeRadiusInner(item.value);
                  }}
                  className={cn(
                    "flex items-center justify-center group aspect-square border rounded-lg transition cursor-pointer",
                    JSON.stringify(item.value) ===
                      JSON.stringify(eyeRadiusInner)
                      ? "border-blue-600 bg-blue-50 hover:bg-blue-100"
                      : "hover:bg-gray-50"
                  )}
                >
                  <div
                    className={cn(
                      "h-8 w-8 bg-border transition",
                      JSON.stringify(item.value) ===
                        JSON.stringify(eyeRadiusInner)
                        ? "bg-blue-600"
                        : "group-hover:border-neutral-500"
                    )}
                    style={{
                      borderTopLeftRadius: `${item.value[0] / 2}px`,
                      borderTopRightRadius: `${item.value[1] / 2}px`,
                      borderBottomLeftRadius: `${item.value[3] / 2}px`,
                      borderBottomRightRadius: `${item.value[2] / 2}px`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};

export default ApperanceSidebar;
