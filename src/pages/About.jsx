

import React from "react";

function About() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main About Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 sm:py-16">
          <div className="w-full lg:w-1/2">
            <img
              src="/media/image/about2.avif"
              className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-lg"
              alt="Luxora about"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              About <span className="text-pink-600 text-4xl sm:text-5xl md:text-6xl">L</span>uxora
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              At Luxora, we believe shopping should be as delightful and
              effortless as the products you choose. Whether you're updating
              your wardrobe, upgrading your lifestyle, or discovering the
              perfect gift, Luxora is your go-to destination for handpicked,
              high-quality items from trusted brands. Founded with a passion for
              providing a seamless online shopping experience, Luxora brings you
              a curated collection of fashion, electronics, beauty, home
              essentials, and more — all in one place. With a user-friendly
              interface and a commitment to customer satisfaction, we strive to
              make your online shopping experience smooth, secure, and
              satisfying.
            </p>
            <p className="text-lg sm:text-xl font-bold text-pink-700">Why Choose Luxora?</p>
            <ul className="ml-4 space-y-2 text-sm sm:text-base">
              <li className="list-disc">Premium Quality Products</li>
              <li className="list-disc">Fast & Reliable Shipping</li>
              <li className="list-disc">Customer-Centric Support</li>
              <li className="list-disc">Secure Payments</li>
              <li className="list-disc">Mobile-Friendly Experience</li>
            </ul>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="py-8 sm:py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 space-y-4 md:space-y-6">
              <h1 className="font-bold text-center text-xl sm:text-2xl text-pink-700">Our Mission</h1>
              <p className="text-gray-700 text-sm sm:text-base line-clamp-2">
                To create an inspiring and stress-free shopping environment where customers can discover products they love, at prices they trust.
              </p>
              <img 
                src="/media/image/about.avif" 
                className="w-full h-auto rounded-xl shadow-lg  mt-4"
                alt="Our Mission"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 space-y-4 md:space-y-6">
              <h1 className="font-bold text-xl sm:text-2xl text-pink-700 text-center">Our Vision</h1>
              <p className="text-gray-700 text-sm sm:text-base line-clamp-2">
                To become one of India's most beloved and customer-centric e-commerce brands, empowering every shopper with choice, confidence, and convenience.
              </p>
              <img 
                src="/media/image/about1.avif" 
                className="w-full h-auto rounded-xl shadow-lg mt-4"
                alt="Our Vision"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;