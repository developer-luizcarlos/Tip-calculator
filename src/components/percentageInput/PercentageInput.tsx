/* eslint-disable react/display-name */
"use client";

import { useState, useRef, forwardRef, useImperativeHandle } from "react";

export type InputPercentageEvent = {
  getValue: () => number;
  clearValue: () => void;
};

const PercentageInput = forwardRef<InputPercentageEvent>(({}, ref) => {
  const [percentage, setPercentage] = useState<number>();

  const inputPercentageRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => {
      return percentage!;
    },
    clearValue: () => {
      inputPercentageRef.current!.value = "";
    },
  }));

  return (
    <input
      type="number"
      ref={inputPercentageRef}
      value={percentage}
      onChange={(e) => {
        setPercentage(e.target.valueAsNumber);
      }}
      className="w-full py-2 border-2 border-transparent rounded-md outline-none text-center text-very-dark-cyan font-semibold bg-light-grayish-cyan text-xl focus:border-strong-cyan" />
  );
});

export default PercentageInput;