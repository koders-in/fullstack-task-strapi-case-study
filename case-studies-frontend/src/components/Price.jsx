import React, { useState } from "react";
import Button from "./Button";
import Curly from "../assets/curly-green-svg.png";
import Gdpr from "../assets/gdpr-logo.png";
import tick from "../assets/tick-mark.png";
import group from "../assets/group.png";
import Verify from "../assets/verify.png";
function Price() {
  const [selectedPlan, setSelectedPlan] = useState("family");
  const [selectYear, setSelectYear] = useState("one");

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 px-6 py-8 bg-gray-50">
      {/* First */}
      <div className="w-full md:w-1/3 space-y-4">
        <div className="flex gap-2 ">
          <div className=" text-green-700 rounded-md px-2 bg-green-300 font-bold ">
            $
          </div>
          <span className="text-green-600 font-bold text-sm">PRICING</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">
          What's the best fit for you?
        </h2>
        <p className="text-gray-500 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
          consequuntur laborum.consectetur adipisicing elit. Rem consequuntur
          laborum.
        </p>
        <div className="flex items-center gap-4 mt-4 absolute">
          <div className="flex gap-2 bg-gray-200 px-5 py-2 rounded-full  ">
            <div
              className={`px-5 py-1 rounded-full cursor-pointer ${
                selectYear === "one" ? "bg-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectYear("one")}
            >
              1 Year
            </div>
            <div
              className={`px-5 py-1 rounded-full cursor-pointer ${
                selectYear === "two" ? "bg-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectYear("two")}
            >
              2 Year
            </div>
          </div>
          <img
            src={Curly}
            alt="curly arrow"
            className="w-8 h-6 relative -top-5 "
          />
          <div className="text-sm text-green-600 rounded-lg px-2 bg-green-100  font-semibold">
            65% off
          </div>
        </div>
        <div className="mt-28">
          <div className="flex items-center gap-10 border border-gray-300 shadow-sm rounded-lg px-8 py-6 bg-white w-max">
            <p className="text-sm font-medium w-30 text-gray-700">
              Compliant with Global Standards
            </p>
            <img src={Gdpr} alt="gdpr Logo" className="w-14 h-14" />
          </div>
        </div>
      </div>

      {/* Family  */}
      <div
        onClick={() => setSelectedPlan("family")}
        className={`w-full relative md:w-1/3 cursor-pointer border-none rounded-xl border-gray-500 shadow-md  flex flex-col items-center  p-6 transition-all duration-300 ${
          selectedPlan === "family" ? "bg-[#00286D] text-white" : "bg-white"
        }`}
      >
        <div className="text-center  text-sm font-bold mb-2 absolute -top-2  text-white bg-green-600 rounded-full px-2 ">
          60% OFF
        </div>
        <div className="flex gap-3">
          <img src={group} alt="group" className="w-6 h-6 " />
          <h6 className="font-bold ">Family</h6>
        </div>
        <div className="text-center mb-2">
          {/* logo */}
          <h2 className="text-xl font-semibold">For your family and friends</h2>
        </div>
        <div className="text-center text-3xl font-bold mb-1">$2.69/mo</div>
        <div className="text-center text-sm mb-4">
          {/* logo */}
          <span>Up to 6 members</span>
        </div>

        <Button
          bgColor={selectedPlan === "family" ? "bg-blue-600" : ""}
          textColor={selectedPlan === "family" ? "text-white" : "text-black"}
          label="Start 14-Day Free Trial"
          disabled={selectedPlan !== "family"}
        />

        <p className="text-center text-sm mt-3">
          Billed at <strike>$141.36</strike> $64.56 for the first 24 months
        </p>

        <div className="mt-5 w-full px-2 ">
          <h3 className="font-semibold text-sm mb-2">
            Included with your plan
          </h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Autosave & Autofill Passwords</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Encrypted password vault</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Sync across all your devices</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Password Health Checker</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Data Breach Monitoring Checker</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Secure File Upload</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Private Email Aliases/Masking</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Single  */}
      <div
        onClick={() => setSelectedPlan("single")}
        className={`w-full md:w-1/3 cursor-pointer border-gray-500 relative flex flex-col items-center shadow-md rounded-xl p-6 transition-all duration-300 ${
          selectedPlan === "single" ? "bg-[#00286D] text-white" : "bg-white"
        }`}
      >
        <div className="text-center  text-sm font-bold mb-2 absolute -top-2  text-white bg-green-600 rounded-full px-2 ">
          50% OFF
        </div>
        <div className="flex gap-3">
          <img src={Verify} alt="group" className="w-6 h-6 " />
          <h6 className="font-bold ">Premium</h6>
        </div>
        <div className="text-center mb-2">
          {/* logo */}
          <h2 className="text-xl font-semibold">
            Best for single user account
          </h2>
        </div>
        <div className="text-center text-3xl font-bold mb-1">$1.49/mo</div>
        <div className="text-center text-sm mb-4">
          {/* logo */}
          <span>Single User account</span>
        </div>

        <Button
          bgColor={selectedPlan === "single" ? "bg-blue-600" : ""}
          textColor={selectedPlan === "single" ? "text-white" : ""}
          label="Start 14-Day Free Trial"
          disabled={selectedPlan !== "single"}
        />

        <p className="text-center text-sm  mt-3">
          Billed at <strike>$71.76</strike> $35.76 for the first 24 months
        </p>

        <div className="mt-5 w-full px-2 ">
          <h3 className="font-semibold text-sm mb-2">
            Included with your plan
          </h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Autosave & Autofill Passwords</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Encrypted password vault</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Sync across all your devices</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Password Health Checker</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Data Breach Monitoring Checker</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Secure File Upload</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={tick} alt="tick" className="w-4 h-4 mt-1" />
              <span>Private Email Aliases/Masking</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Price;
