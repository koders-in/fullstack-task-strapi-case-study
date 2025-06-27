import { Loader2 } from "lucide-react";
export default function Loading() {
  return (
    <div className="flex justify-center items-center flxed top-0 left-0 h-screen w-screen bg-[#1e1e1e]">
      <div className="flex gap-5 items-center text-white">
        <Loader2 className=" w-16 h-16 animate-spin"></Loader2>
        <h2 className="text-3xl">Loading ...</h2>
      </div>
    </div>
  );
}
