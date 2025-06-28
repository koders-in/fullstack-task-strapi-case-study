import React from "react";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import PricingPlans from "../components/PricingPlan";




export default function DefendiaPage() {
    return (
        <div className="flex flex-col items-center text-gray-900 font-sans">



            {/* Hero Section */}
            <section className="w-full bg-black text-white py-16 text-center px-4 h-[70vh]">
                <div>
                    <span className="text-xs mb-4 text-white border border-gray-900 bg-gray-700 rounded-xl py-1 px-2">Case Studies</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-2">Brands choose Defendia</h1>
                <p className="text-md max-w-2xl mx-auto mb-6">
                    Defendia provides businesses and individuals worldwide with a secure and
                    convenient way to manage passwords, passkeys, credit cards, and other
                    sensitive information.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm">
                        Get Family Plan
                    </button>
                    <button className="border bg-gray-900 border-white/15 text-white px-6 py-2 rounded transition text-sm">
                        Get Premium Plan
                    </button>
                </div>
            </section>


            <section className="p-4 md:p-6 max-w-6xl w-full relative z-10 bg-white rounded-lg shadow flex flex-col lg:flex-row gap-6 lg:gap-10 sm:-mt-20 lg:-mt-40">
                {/* Left Section: hidden below lg */}
                <div className="hidden lg:block w-1/2 bg-white min-h-[200px]">
                    {/* Place image or illustration here */}
                </div>

                {/* Right Section: always visible */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between min-h-[250px]">
                    <div>
                        <span className="text-xs text-[#2feef8] rounded-xl bg-blue-600 px-2 py-1 inline-block">
                            Software Development Firm
                        </span>
                        <h1 className="text-xl font-bold mt-2 mb-2 leading-normal">
                            NexaTech: Strengthening Data Security Across Global Teams
                        </h1>
                        <p className="text-xs text-gray-440 font-semibold">
                            As a growing digital bank, Verdelock needed a robust solution to safeguard customer transactions and meet strict financial regulations... Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam distinctio autem dolore beatae veniam hic ratione quod odio adipisci esse iusto officiis voluptatem provident vero?
                        </p>
                    </div>

                    <div className="mt-4">
                        <h1 className="text-sm font-semibold">Logo</h1>
                    </div>
                </div>
            </section>



            {/* Case Studies */}
            <CaseStudies />
            <PricingPlans />
            <Testimonials />


            {/* CTA Footer */}
            <section className="w-full bg-gray-50 py-12 text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Strong Passwords, Effortless Access</h2>
                <p className="mb-6 max-w-2xl mx-auto text-gray-600">
                    Defendia provides a secure and convenient way to manage passwords and sensitive data.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                        For Family Use
                    </button>
                    <button className="border border-gray-500 text-gray-700 px-6 py-2 rounded hover:bg-gray-100">
                        For Personal Use
                    </button>
                </div>
            </section>


            {/* <Footer /> */}
        </div>
    );
}
