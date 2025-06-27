import { type ReactNode } from "react";

interface ToggleProps {
  label: ReactNode;
  selected: boolean;
}

export default function Toggle({ labels }: { labels: ToggleProps[] }) {
  return (
    <div className="flex bg-gray-100 w-fit p-1 rounded-4xl border border-[#ededed]">
      {labels.map(({ selected, label }) => {
        return (
          <button
            className={`sm:px-6 sm:py-2 px-2 py-1 rounded-full text-xs sm:text-sm ${
              selected ? "bg-white text-gray-700" : "text-gray-500"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
