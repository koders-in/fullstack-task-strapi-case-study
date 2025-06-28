import React from 'react'

function Footer() {
  return (
    
            <footer className="bg-black text-white py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div>
            <h5 className="font-semibold mb-2">Defendia</h5>
            <ul className="space-y-1">
              <li>Personal</li>
              <li>Family</li>
              <li>Pricing</li>
              <li>Features</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Programs</h5>
            <ul className="space-y-1">
              <li>For Universities</li>
              <li>For Non-Profits</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Resources</h5>
            <ul className="space-y-1">
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Password Tools</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-2">Free Tools</h5>
            <ul className="space-y-1">
              <li>Username Generator</li>
              <li>Password Strength Checker</li>
              <li>Data Breach Scanner</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-6 text-xs text-center">
          <p className="text-gray-400">© 2025 Defendia. All Rights Reserved</p>
        </div>
      </footer>

  )
}

export default Footer
