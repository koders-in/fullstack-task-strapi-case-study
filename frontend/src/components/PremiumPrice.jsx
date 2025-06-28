import React from 'react'

function PremiumPrice() {


    const plans = [
        {
            label: "Family",
            price: "$2.69/mo",
            features: [
                "Autofill & Audit Passwords",
                "Encrypted password vault",
                "Sync across all your devices",
                "Password Health Checker",
                "Data Breach Monitoring Tool",
                "Secure file uploads",
                "Private Email Aliases/Masking",
            ],
            cta: "Start 14-Day Free Trial",
        }
    ];
    return (
        <div>
            {
                plans.map((plan, idx) => (
                    <div key={idx} className=" p-6 rounded-xl shadow-md w-full max-w-sm text-left">
                        <h4 className="text-lg font-semibold mb-2">{plan.label}</h4>
                        <div className="text-2xl font-bold mb-4">{plan.price}</div>
                        <ul className="space-y-2 text-sm">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex gap-2 items-center">
                                    <span className="text-green-600 font-bold">✓</span> {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            {plan.cta}
                        </button>
                    </div>
                ))
            }

        </div>
    )
}

export default PremiumPrice;
