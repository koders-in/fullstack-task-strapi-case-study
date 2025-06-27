
import { CheckCircle, DollarSign } from "lucide-react";
import Toggle from "../ui/toggle";
const features = [
  "Autosave & Autofill Passwords",
  "Encrypted password vault",
  "Sync across all your devices",
  "Password Health Checker",
  "Data Breach Monitoring Tool",
  "Secure file uploads",
  "Private Email Aliases/Masking",
];
const toggleProps = [
  {
    label: <span className="flex items-center gap-1">1 Year</span>,
    selected: true,
  },
  {
    label: <span className="flex items-center gap-1">2 Year</span>,
    selected: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-20 font-sans text-gray-900 w-full">
      <div className="mx-auto 2xl:w-[1600px]  w-full flex flex-col 2xl:flex-row gap-5 ">
        <div className="mx-auto flex flex-col gap-5 w-full 2xl:max-w-[650px]">
          <div className="text-green-600  flex itens-center font-medium font gap-1 ">
            <div className="bg-green-300  rounded-lg">
              <DollarSign className="w-6 h-6 p-0.5" />
            </div>
            <p className="ml-2">PRICING</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What’s the best fit for you?
          </h2>
          <p className="text-gray-600 mb-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between 2xl:flex-col 2xl:items-start 2xl:gap-4">
            {/* Toggle Button with Badge */}
            <div className="relative w-fit">
              <Toggle key={"toggle-button-year"} labels={toggleProps} />
              <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-[10px] font-semibold absolute -top-2 -right-10">
                65% off
              </div>
            </div>

            {/* Compliance Box */}
            <div className="rounded-xl p-4 text-sm bg-white/80 border border-[#ededed] flex items-center justify-between gap-4 w-full sm:w-auto">
              <div className="flex flex-col text-black/60">
                <div className="font-medium">Compliant with</div>
                <div className="font-medium">Global Standards</div>
              </div>
              <div>
                <img
                  src="./settings.webp"
                  alt="Settings Icon"
                  className="w-14 h-14"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 flex-1">
          <div className="flex-1 bg-[#060080] w-full md:w-[400px]  text-white rounded-3xl p-8 relative ">
            <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              60% OFF
            </div>
            <h3 className="text-xl font-semibold mb-2">👨‍👩‍👧‍👦 Family</h3>
            <p className="text-sm text-blue-100 mb-3">
              For your family and friends
            </p>
            <div className="text-4xl font-bold mb-1">
              $2.69 <span className="text-base font-medium">/mo</span>
            </div>
            <p className="text-sm mb-4 text-blue-100">👥 Up to 6 members</p>
            <button className="w-full bg-[#2142ff] text-white py-3 rounded-lg font-semibold mb-4">
              Start 14-Day Free Trial
            </button>
            <p className="text-sm mb-6 text-blue-100 ">
              Billed at <span className="line-through mx-0.5">$141.36</span>
              $64.56 for the first 24 months
            </p>
            <p className="text-sm text-blue-100 mb-4">
              Included with your plan
            </p>
            <ul className="space-y-3 mt-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-white mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 bg-gray-50   rounded-3xl p-8 relative w-full md:w-[400px]">
            <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              50% OFF
            </div>
            <h3 className="text-xl font-semibold mb-2">🥇 Premium</h3>
            <p className="text-sm text-gray-600 mb-3">
              Best for single user accounts
            </p>
            <div className="text-4xl font-bold mb-1">
              $1.49 <span className="text-base font-medium">/mo</span>
            </div>
            <p className="text-sm mb-4 text-gray-500">👤 Single user account</p>
            <button className="w-full bg-white border border-gray-300 text-gray-800 py-3 rounded-lg font-semibold mb-4 hover:bg-gray-100">
              Start 14-Day Free Trial
            </button>
            <p className="text-sm text-gray-500 line-through mb-6">
              Billed at <span className="line-through mx-0.5">$141.36</span>
              $35.76 for the first 24 months
            </p>
            <p className="text-sm  mb-4">Included with your plan</p>
            <ul className="space-y-3 mt-6">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
