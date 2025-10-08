"use client"

import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ 
  children,
  className 
}: { 
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

