import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContractUpload from "@/components/ContractUpload";
import AIAssistant from "@/components/AIAssistant";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <Header />
      <main>
        <HeroSection />

        {/* Features Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contract Upload Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <ContractUpload />
            </div>

            {/* AI Assistant Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <AIAssistant />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About ImobAI
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your intelligent real estate platform for Romania. Find your
                perfect property, analyze contracts with AI, and get expert
                insights for your real estate decisions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Smart Property Search
                </h3>
                <p className="text-gray-600">
                  Find properties across Romania with intelligent search and
                  real-time suggestions.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  AI Contract Analysis
                </h3>
                <p className="text-gray-600">
                  Upload contracts and get instant AI-powered analysis and
                  recommendations.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Expert AI Assistant
                </h3>
                <p className="text-gray-600">
                  Get personalized advice about Romanian real estate market and
                  investment opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Properties Listed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-blue-100">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Romanian Cities</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">AI Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ImobAI</h3>
              <p className="text-gray-400">
                Intelligent real estate platform for Romania. Making property
                search and analysis easier with AI.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/buy" className="hover:text-white">
                    Buy Properties
                  </a>
                </li>
                <li>
                  <a href="/rent" className="hover:text-white">
                    Rent Properties
                  </a>
                </li>
                <li>
                  <a href="/upload-contract" className="hover:text-white">
                    Contract Analysis
                  </a>
                </li>
                <li>
                  <a href="/zip-converter" className="hover:text-white">
                    ZIP Converter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Cities</h4>
              <ul className="space-y-2 text-gray-400">
                <li>București</li>
                <li>Cluj-Napoca</li>
                <li>Timișoara</li>
                <li>Brașov</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@imobai.ro</li>
                <li>+40 21 123 4567</li>
                <li>București, Romania</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ImobAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
