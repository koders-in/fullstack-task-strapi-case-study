import React from "react";
import PricingCard from "../components/PricingCard.jsx";
import pricingData from "../components/PricingData.jsx";
import Pricing from "./Pricing.jsx";

const PricingPlans = () => {
  return (
    <div className="flex flex-wrap mt-6 lg:gap-15 xl:gap-22 min-h-screen pt-8.5 pl-8.5 xl:pl-0">
      <Pricing />
      {pricingData.map((plan) => (
        <PricingCard key={plan.id} {...plan} />
      ))}
    </div>
  );
};

export default PricingPlans;
