import {
  SiGooglechrome,
  SiFirefoxbrowser,
  SiSafari,
} from "react-icons/si";

import {
  FaWindows,
  FaLinux,
  FaApple
} from "react-icons/fa";

export default function ReadPage() {
  return (
    <div className="flex flex-col font-sans text-gray-900">
      {/* Hero Section */}
      <section className="w-full bg-black text-white py-16 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src="/avatar.png"
            alt="User"
            className="mx-auto w-16 h-16 rounded-full mb-4"
          />
          <p className="text-sm">Sara, HR @NexaTech</p>
          <h1 className="text-2xl md:text-4xl font-bold mt-4 mb-2">
            “We no longer have to hassle saving company passwords now”
          </h1>
          <p className="text-xs text-gray-400">Customers &gt; NexaTech</p>
        </div>
      </section>

      {/* Company Info and Overview */}
      <section className="max-w-6xl w-full px-4 md:px-8 py-10 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="space-y-4">
          <div className="text-xs text-gray-500">
            <h3 className="font-bold text-sm text-black">About Brand</h3>
            <p>NexaTech is a forward-thinking digital solutions firm...</p>
          </div>
          <ul className="text-xs space-y-1">
            <li>
              <strong>Company size:</strong> 50–100 employees
            </li>
            <li>
              <strong>Industry:</strong>{" "}
              <a href="#" className="text-blue-600">
                Software Development Firm
              </a>
            </li>
            <li>
              <strong>Headquarters:</strong> London, England
            </li>
            <li>
              <strong>Founded:</strong> 2016
            </li>
          </ul>
          <div className="text-xs">
            <strong>Misuse use cases</strong>
            <ul className="list-disc list-inside">
              <li>Secure remote collaboration</li>
              <li>Client operations</li>
              <li>Internal workflows</li>
            </ul>
          </div>
        </aside>

        <div className="lg:col-span-2 space-y-6 text-sm">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-semibold">Boost your Internet Security</h3>
            <p className="text-xs">Store and manage passwords with just a click</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded text-xs">
              Claim 25% Discount
            </button>
          </div>

          <p>Lorem ipsum dolor sit amet...</p>

          <h3 className="text-lg font-semibold">Topic Heading</h3>
          <ul className="list-disc list-inside text-sm">
            <li>Vestibulum platea mollis netus...</li>
            <li>Mi per commodo sodales habitasse...</li>
            <li>Surpasses ideal imperdiet tristique...</li>
          </ul>

          <h4 className="font-semibold">Subtopic Heading</h4>
          <p>Vestibulum platea mollis netus...</p>

          <h5 className="font-medium">Sub-Subtopic Heading</h5>
          <p>Vestibulum platea mollis netus...</p>

          <div className="bg-gray-50 p-4 rounded text-sm">
            <strong>Conclusion / tl;dr</strong>
            <p>Vestibulum platea mollis netus...</p>
          </div>

          <div className="pt-4 border-t text-xs text-gray-500">
            <strong>Tags:</strong> Category 01, Category 02, Category 03
          </div>
        </div>
      </section>

      {/* Newsletter Sign-Up */}
      <section className="bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="font-semibold text-sm mb-2">Sign Up for our Newsletter</h4>
          <p className="text-xs text-gray-500 mb-4">Lorem ipsum dolor sit amet...</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="border px-4 py-2 rounded w-full sm:w-64 text-xs"
            />
            <button className="px-4 py-2 bg-blue-600 text-white text-xs rounded">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Read More Section */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <h4 className="text-sm font-bold mb-4">Read about more Case Studies</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-white p-4 shadow rounded">
            <p className="text-blue-600">Digital Bank Services</p>
            <h5 className="font-bold mt-1">Protecting Financial Data</h5>
            <p className="mt-1 text-gray-600">As a growing digital bank...</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <p className="text-blue-600">IT Services</p>
            <h5 className="font-bold mt-1">Enhancing Cybersecurity</h5>
            <p className="mt-1 text-gray-600">Aerolink, a major player...</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-10 bg-white">
        <h3 className="text-sm text-green-600">4.8/5 on Trustpilot</h3>
        <h3 className="text-sm text-red-600">4.8/5 on G2</h3>
        <h2 className="text-xl font-bold mt-4">Strong Passwords, Effortless Access</h2>
        <p className="text-sm max-w-xl mx-auto mt-2">
          Defendia provides secure ways to manage passwords, passkeys, credit cards and more.
        </p>
        <div className="flex gap-4 justify-center mt-4 flex-wrap">
          <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">For Family Use</button>
          <button className="px-4 py-2 border border-gray-300 rounded text-sm">For Personal Use</button>
        </div>
      </section>

      {/* Browser Support Icons Section
      <section className="bg-gray-100 py-6">
        <div className="max-w-6xl mx-auto text-center text-gray-700 text-2xl flex flex-wrap gap-6 justify-center items-center">
          <SiGooglechrome />
          <SiFirefoxbrowser />
          <SiSafari />
          <FaWindows />
          <FaLinux />
          <FaApple />
        </div>
      </section> */}

      

    </div>
  );
}
