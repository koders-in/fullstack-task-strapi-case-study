

export default function Newsletter() {
  return (
    <div className=" px-5 py-6 flex  flex-col gap-2 lg:flex-row md:items-center justify-between w-full border border-[#d8d8d8] rounded-2xl overflow-hidden bg-[#fdfdfd] shadow-md">
      <div>
        <h2 className="font-semibold mb-1">Sign Up for our Newsletter</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipi sicing elit. Volupt ate
          maxime molestias temporibus recusandae. Cumque, distinctio.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 ">
        <input
          type="text"
          placeholder="Email Address"
          className="text-sm font-medium py-3 px-6  w-full sm:w-[350px] rounded-lg border border-black/20"
        />
        <button className="bg-[#2f70fd] text-white text-sm font-medium py-3 px-6  w-full sm:w-[200px] rounded-lg border border-white/20 ">
          Submit
        </button>
      </div>
    </div>
  );
}
