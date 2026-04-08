"use client";

import React, { useState } from "react";

type StepItem = {
  title: string;
  description: string;
};

interface VerticalStepListProps {
  items: StepItem[];
  activeColor?: string;
  inactiveColor?: string;
  onChange?: (index: number) => void;
}

export default function VerticalStepList({
  items,
  activeColor = "#239DEA",
  inactiveColor = "#D0D5DD",
  onChange,
}: VerticalStepListProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div className="flex gap-6">
      <div className="relative w-2 rounded-full" style={{ backgroundColor: inactiveColor }}>
        <div
          className="absolute w-full rounded-full transition-all duration-300"
          style={{
            backgroundColor: activeColor,
            height: `${100 / items.length}%`,
            top: `${(100 / items.length) * activeIndex}%`,
          }}
        />
      </div>

      <div className="grid gap-6">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className="cursor-pointer"
            >
              <p
                className={`text-xl font-semibold transition-colors duration-200 ${
                  isActive ? "text-black" : "text-[#98A2B3]"
                }`}
              >
                {item.title}
              </p>
              {isActive && (
                <p className="text-base text-[#344054] mt-1">{item.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
