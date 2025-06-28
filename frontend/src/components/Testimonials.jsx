import React from 'react'

function Testimonials() {
    return (
        <section className="py-16 px-4 w-full bg-white">
            <h3 className="text-center text-xl font-semibold mb-8">Customers love using Defendia</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {["Google", "Microsoft", "Amazon"].map((brand, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow">
                        <h4 className="font-bold mb-2">Heading about the review</h4>
                        <p className="text-sm text-gray-600 mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-sm font-medium">Reviewer Name</p>
                        <p className="text-xs text-gray-500">Company Position</p>
                    </div>
                ))}
            </div>
        </section>


    )
}

export default Testimonials
