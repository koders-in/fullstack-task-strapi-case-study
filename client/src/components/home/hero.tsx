
export default function Hero() {
  return (
    <div
      className="text-center w-full mx-auto z-10 text-white px-5 sm:px-10 lg:px-0
"
    >
      <div className="flex flex-col gap-1 items-center">
        <span className=" px-4 py-1 mt-0 sm:mt-4 text-sm w-fit bg-[#3c3c3c] rounded-full mb-4 border-white/20 border">
          Case Studies
        </span>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ">
            Brands choose Defendia
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8  w-full lg:w-[800px] mx-auto">
            Defendia provides businesses and individuals worldwide with a secure
            and convenient way to manage passwords, passkeys, credit cards, and
            other sensitive information.
          </p>
        </div>
        <div className="flex justify-center gap-4 sm:flex-row flex-col w-full ">
          <button className="bg-[#2f70fd] text-sm font-medium py-3 px-6  w-full sm:w-[200px] rounded-lg border-white/20 border">
            Get Family Plan
          </button>
          <button className="bg-white/10  text-sm font-medium py-3 px-6  w-full sm:w-[200px]  rounded-lg border-white/20 border">
            Get Premium Plan
          </button>
        </div>
      </div>
    </div>
  );
}
