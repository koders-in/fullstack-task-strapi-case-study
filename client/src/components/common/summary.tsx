import { Star } from "lucide-react";

export default function Summary() {
  return (
    <div className="text-center py-16 px-4  mx-auto bg-white w-full">
      <div className="flex justify-center gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-800">
          <div className="bg-green-600 text-white rounded-full p-1">
            <Star className="w-4 h-4 fill-white" />
          </div>
          4.9/5 on Trustpilot
        </div>
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-800">
          <div className="bg-red-600 text-white rounded-full p-1">
            <Star className="w-4 h-4 fill-white" />
          </div>
          4.9/5 on G2
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Strong Passwords, Effortless Access
      </h1>

      <p className="text-gray-600 mb-6 text-base max-w-2xl mx-auto">
        Defendia provides businesses and individuals worldwide with a secure and
        convenient way to manage passwords, passkeys, credit cards, and other
        sensitive information.
      </p>

      <div className="flex justify-center gap-4 flex-col items-center sm:items-start sm:flex-row ">
        <button className="bg-[#2f70fd]  text-white text-sm font-medium py-3 px-6  w-full sm:w-[200px] rounded-lg border-white/20 border">
          For Family Plan
        </button>
        <button className="bg-white   border border-gray-200 text-sm font-medium py-3 px-6  w-full sm:w-[200px] rounded-lg ">
          For Personal Plan
        </button>
      </div>
    </div>
  );
}
