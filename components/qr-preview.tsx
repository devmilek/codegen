"use client";

import { useQrStore } from "@/hooks/use-qr-store";
import React from "react";
import { QRCode } from "react-qrcode-logo";

const QrPreview = () => {
  const { value, bgColor, dotsColor, eyeRadiusOuter, eyeRadiusInner } =
    useQrStore();
  return (
    <div className="flex items-center justify-center flex-col space-y-2">
      <QRCode
        value={value}
        size={300}
        bgColor={bgColor}
        fgColor={dotsColor}
        eyeRadius={[
          {
            outer: [
              eyeRadiusOuter[0],
              eyeRadiusOuter[1],
              eyeRadiusOuter[2],
              eyeRadiusOuter[3],
            ],
            inner: [
              eyeRadiusInner[0] / 3,
              eyeRadiusInner[1] / 3,
              eyeRadiusInner[2] / 3,
              eyeRadiusInner[3] / 3,
            ],
          },
          {
            outer: [
              eyeRadiusOuter[3],
              eyeRadiusOuter[0],
              eyeRadiusOuter[1],
              eyeRadiusOuter[2],
            ],
            inner: [
              eyeRadiusInner[3] / 3,
              eyeRadiusInner[0] / 3,
              eyeRadiusInner[1] / 3,
              eyeRadiusInner[2] / 3,
            ],
          },
          {
            outer: [
              eyeRadiusOuter[1],
              eyeRadiusOuter[2],
              eyeRadiusOuter[3],
              eyeRadiusOuter[0],
            ],
            inner: [
              eyeRadiusInner[1] / 3,
              eyeRadiusInner[2] / 3,
              eyeRadiusInner[3] / 3,
              eyeRadiusInner[0] / 3,
            ],
          },
        ]}
      />
    </div>
  );
};

export default QrPreview;
