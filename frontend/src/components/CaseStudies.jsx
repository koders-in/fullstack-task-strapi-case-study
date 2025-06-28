import React from 'react'

function CaseStudies() {
    return (

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl w-full">
            {[
                {
                    title: "NexaTech: Strengthening Data Security Across Global Teams",
                    category: "Software Development Firm",
                    desc: "NexaTech faced the challenge of securing sensitive client and employee data while maintaining seamless access for their globally distributed workforce",
                },
                {
                    title: "Verdelock: Protecting Financial Data with Seamless Security",
                    category: "Digital Bank Services",
                    desc: "As a growing digital bank, Verdelock needed a robust solution to safeguard customer transactions and meet strict financial regulations",
                },
                {
                    title: "Aerolink: Enhancing Cybersecurity in the Aviation Industry",
                    category: "IT Services",
                    desc: "Aerolink, a major player in the aviation sector, required a reliable way to secure operational data and employee credentials",
                },
                {
                    title: "MediSure: Ensuring Compliance and Security in Healthcare",
                    category: "Health Services",
                    desc: "MediSure, a healthcare technology provider, needed to protect patient records while complying with industry standards like HIPAA",
                },
                {
                    title: "Fineza: Fortifying Financial Data with Seamless Security",
                    category: "FinTech",
                    desc: "Fineza, a digital finance platform, faced growing concerns over client data privacy and compliance with regulations like SOC 2",
                },
            ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow p-4 min-h-[300px] flex items-end">
                    <div className="whitespace-normal break-spaces " >
                        <span className="text-xs uppercase text-blue-600 font-medium">{item.category}</span>
                        <h3 className="mt-2 mb-2  text-md font-semibold ">{item.title}</h3>
                        <p className="text-gray-600 text-xs text-gray-440 font-medium">{item.desc}</p>
                    </div>

                </div>
            ))}
        </section>

    )
}

export default CaseStudies
