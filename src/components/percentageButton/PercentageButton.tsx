"use client";

interface PercentageButtonProps {
  text: string;
  event: () => void;
}

export default function PercentageButton({ text, event }: PercentageButtonProps) {
  return (
    <button
      onClick={event}
      className="bg-very-dark-cyan w-full py-2 text-very-light-grayish-cyan text-xl font-semibold rounded-md duration-75 hover:bg-strong-cyan hover:text-very-dark-cyan"
    >
      {text + "%"}
    </button>
  );
}