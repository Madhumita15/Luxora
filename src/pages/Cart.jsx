import React, { useState } from "react";
import { getCartContext } from "../context/CartContext";
import { NavLink } from "react-router-dom";
import CartList from "../component/CartList";
import OrderInfo from "../component/OrderInfo";
import DeliveryInfo from "../component/DeliveryInfo";

function Cart({ location, getLocation }) {
  const { cartData, handleDelete, updatedQuantity } = getCartContext();
  

  const totalPrice = cartData.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0
  );

  return (
    <>
      {cartData.length > 0 ? (
        <div className="min-h-screen bg-gray-50 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-pink-700 pt-28 mb-8">
              My Cart ({cartData.length})
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items - Left Side */}
              <div className="lg:w-3/5">
                <CartList
                  cartData={cartData}
                  updatedQuantity={updatedQuantity}
                  handleDelete={handleDelete}
                />
              </div>

              {/* Payment & Delivery Info - Right Side */}
              <div className="lg:w-2/5">
                <div className="sticky top-28 space-y-6">
                  {/* Order Summary */}
                  <OrderInfo totalPrice={totalPrice} />

                  {/* Delivery Info */}
                  <DeliveryInfo location={location} getLocation={getLocation}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md mx-4">
            <h1 className="text-2xl md:text-4xl font-bold text-pink-700 mb-6">
              Your Cart is Empty
            </h1>
            <img
              src="/media/image/emptycart.webp"
              alt="Empty Cart"
              className="w-full max-w-xs mx-auto mb-8"
            />
            <NavLink to="/products">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg font-semibold hover:from-pink-700 hover:to-pink-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 shadow-lg">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
