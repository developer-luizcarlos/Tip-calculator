/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
"use client";

import { useState, useRef, forwardRef, useImperativeHandle, InputHTMLAttributes } from "react";

interface InputWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon: any;
  errorMessage: string;
}

const InputWrapper = forwardRef<"", InputWrapperProps>((props, ref) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [errorMsgIsVisible, setErrorMsgVisibility] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col gap-2">
      <header className="flex items-center justify-between select-none">
        <label
          htmlFor={props.name}
          className="text-base text-very-dark-cyan capitalize font-semibold"
        >
          {props.label}
        </label>
        <small className={errorMsgIsVisible ? "text-red-700 text-sm font-bold" : "hidden"}>{props.errorMessage}</small>
      </header>
      <div
        className={errorMsgIsVisible ? "flex items-center bg-very-light-grayish-cyan h-10 rounded-sm shadow-sm shadow-zinc-200 border-2 border-transparent duration-75 ease-in has-[input:focus]:border-red-600" : "flex items-center bg-very-light-grayish-cyan h-10 rounded-sm shadow-sm shadow-zinc-200 border-2 border-transparent duration-75 ease-in has-[input:focus]:border-strong-cyan"}>
        <span className="w-9 p-2 text-base text-very-dark-cyan">{props.icon}</span>
        <input
          type="number"
          ref={inputRef}
          autoFocus={props.autoFocus}
          id={props.name}
          className="bg-transparent w-full h-full p-4 text-xl text-right text-dark-grayish-cyan focus:text-very-dark-cyan font-extrabold outline-none"
          onChange={(e) => {
            setInputValue(e.target.valueAsNumber);
          }}
        />
      </div>
    </div>
  );
});

export default InputWrapper;