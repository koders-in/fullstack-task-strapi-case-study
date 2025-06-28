// components/PricingCard.jsx
import React from "react";
import { DollarSign } from "lucide-react";

const PricingCard = ({
    badge,
    title,
    subtitle,
    price,
    originalPrice,
    discountedPrice,
    duration,
    cta,
    features,
    trialNote,
}) => {
    return (
        <div className="pt-4 px-2 rounded-xl shadow  w-[300px] text-left  h-[520px] mt-5 ">
            {/* Badge */}
            {badge && (
                <p className="w-fit mx-auto text-xs mb-2 uppercase bg-green-500 shadow rounded-xl -mt-8 px-4 py-1 text-white">
                    {badge}
                </p>
            )}

            {/* Titles */}
            <p className="font-bold mb-2 text-sm text-center">{title}</p>
            {subtitle && (
                <p className="font-bold mb-4 text-sm text-center -mt-2">{subtitle}</p>
            )}

            {/* Pricing */}
            <p className="font-bold mb-4 text-sm text-center">
                <span className="text-[10px] align-super inline-block">
                    <DollarSign size={20} />
                </span>
                <span className="text-3xl font-bold">{price}</span>
                <span className="text-xs">/mon</span>
            </p>

            {/* Duration */}
            <p className="font-bold mb-4 text-sm text-center -mt-2">{duration}</p>

            {/* CTA */}
            <button className="-mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                {cta}
            </button>

            {/* Price Breakdown */}
            {discountedPrice && originalPrice && (
                <p className="font-bold text-xs text-center flex justify-center items-center mt-2 flex-wrap">
                    Build at&nbsp;
                    <DollarSign className="h-3 line-through" />
                    <span className="line-through -ml-2">{originalPrice}</span>
                    &nbsp;&nbsp;
                    <DollarSign className="h-3" />
                    <span className="-ml-2">{discountedPrice}</span> for the first 24
                    months
                </p>
            )}

            {/* Trial Note */}
            {trialNote && (
                <p className="text-xs text-gray-500 mt-2 text-center">{trialNote}</p>
            )}

            {/* Feature List */}
            <p className="mt-4 text-sm font-semibold">Included with your plan:</p>
            <ul className="space-y-2 text-sm mt-2">
                {features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-center">
                        <span className="text-green-600 font-bold">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;
