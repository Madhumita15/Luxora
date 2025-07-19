import React from "react";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";
import { IoBag } from "react-icons/io5";

function OrderInfo({ totalPrice }) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <div className="flex items-center text-gray-600">
              <FaSitemap className="mr-2" />
              <span>Subtotal</span>
            </div>
            <span className="font-medium">₹{totalPrice}</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center text-gray-600">
              <MdOutlineDeliveryDining className="mr-2" />
              <span>Delivery</span>
            </div>
            <span className="font-medium text-green-600">FREE</span>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center text-gray-600">
              <IoBag className="mr-2" />
              <span>Tax</span>
            </div>
            <span className="font-medium">₹5</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between text-lg font-bold">
            <span>Total</span>
            <span className="text-pink-700">₹{totalPrice + 5}</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Promo Code
          </h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
            <button className="bg-pink-600 text-white px-4 py-2 rounded-r-lg hover:bg-pink-700 transition-colors">
              Apply
            </button>
          </div>
        </div>

        <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-700 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
          Proceed to Payment
        </button>
      </div>
    </>
  );
}

export default OrderInfo;
