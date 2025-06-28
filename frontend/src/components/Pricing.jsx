import React from 'react'
import { DollarSign } from 'lucide-react';
import { ArrowLeftCircle } from "lucide-react";

function Pricing() {


    return (
        <div>
            <div className="bg-white  w-[300px] text-left m-h-[120px]">
                <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 bg-green-300 rounded-sm py-0.5 scroll text-green-600" />
                    <span className="text-xs text-green-500">PRICING</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 mt-4">What's the best fit for you?</h3>

                <p className="max-w-xl mx-auto mb-8 text-gray-600 text-xs font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="flex gap-3 items-center ">
                    <div className="flex  shadow gap-8 py-0.5 bg-gray-200 text-xs  rounded-3xl  justify-between items-center pl-2 pr-1">
                        <span className="pl-6">1 Year</span>
                        <span className="border-gray-400 bg-white px-6 py-2 rounded-2xl mr-0 pr-6 ">2 Years</span>
                    </div>
                    <div className="flex flex-col">
                        <ArrowLeftCircle className="h-4 " />
                        <span className=" text-gray-600 ">65%</span>
                    </div>
                </div>

                <div className="max-w-xl mx-auto mt-8 text-gray-600 text-xs font-semibold shadow flex justify-between px-4 py-5 rounded-xl">
                    <div>Compalin with <br /> Global Standad</div>
                    <div>GDPR</div>
                </div>
            </div>
        </div>

    )
}

export default Pricing
