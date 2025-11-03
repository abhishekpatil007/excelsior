import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <a href="/" className="inline-block transform transition-transform duration-200 hover:scale-105">
                <Image 
                  src="/images/design-mode/logo.jpg" 
                  alt="Excelsior Logo" 
                  width={400}
                  height={120}
                  className="h-12 w-auto object-contain"
                  style={{ backgroundColor: 'transparent' }}
                />
              </a>
            </div>
            <p className="text-white/70 mb-4 max-w-md">
              Excelsior - Empowering traders and investors with comprehensive stock market education. Transform your financial future with proven strategies.
            </p>
            <p className="text-sm text-white/50 italic">"Master Stock Market Trading & Build Your Financial Future"</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Course</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Free Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; 2025 Excelsior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
