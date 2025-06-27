import  { type ReactNode } from "react";

export default function CompanyTitle({ children }: { children?: ReactNode }) {
  return (
    <div className="font-semibold px-3 py-0.5 md:text-xs text-sm bg-blue-100 text-blue-600 rounded-full w-fit ">
      {children}
    </div>
  );
}
