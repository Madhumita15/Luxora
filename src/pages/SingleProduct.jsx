

import axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { NavLink, useParams } from "react-router-dom";
import { LuWalletCards } from "react-icons/lu";
import Lottie from 'react-lottie'
import loadingAnimation from '../assets/Confetti - Animation 01.json'
import { getCartContext } from "../context/CartContext";


export const SingleProduct = () => {
  const params = useParams();
  const url = `https://dummyjson.com/products/${params.productId}`;
  const [singleData, setSingleData] = useState(null);
  const {addToCart} = getCartContext();

  const getSingleProduct = async () => {
    try {
      const response = await axios.get(url);
      const exactData = response.data;
      setSingleData(exactData);
      console.log(exactData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
    window.scrollTo(0,0)
  }, []);

  let defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation
  }

  if (!singleData) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        <Lottie options={defaultOptions} height={200} width={200} />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-12 px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="py-6">
        <h1 className="text-center text-sm sm:text-base text-gray-600">
          <NavLink to="/" className="hover:text-blue-600">Home</NavLink> / 
          <NavLink to="/products" className="hover:text-blue-600">Products</NavLink> / 
          {singleData.title}
        </h1>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Product Image */}
          <div className="lg:w-1/2 p-4 sm:p-6 relative">
            <span className="flex items-center justify-center absolute top-6 right-6 bg-yellow-300 text-gray-800 text-sm sm:text-base font-bold px-2.5 py-0.5 rounded-full">
              {singleData.rating}
              <IoMdStarOutline className="text-sm sm:text-base text-yellow-700 ml-1" />
            </span>
            <img
              src={singleData.thumbnail}
              alt={singleData.title}
              className="w-full h-auto max-h-96 object-contain rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2 p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {singleData.title}
            </h1>
            
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              {singleData.description}
            </p>

            <div className="mb-6">
              <p className="text-2xl sm:text-3xl font-bold flex items-center">
                ₹{singleData.price}
                <span className="ml-3 text-sm sm:text-base text-red-500 font-bold">
                  {singleData.discountPercentage}%OFF
                </span>
              </p>
            </div>

            <div className="space-y-2 mb-8 text-sm sm:text-base">
              <p>
                <span className="text-gray-600">Category:</span> {singleData.category}
              </p>
              <p>
                <span className="text-gray-600">Brand:</span> 
                <span className="text-red-600 font-medium ml-1">{singleData.brand}</span>
              </p>
              <p>
                <span className="text-gray-600">Stock:</span> {singleData.stock}
              </p>
              <p>
                <span className="text-gray-600">Quantity: <input type="number" name="quantity" id="quantity" className="border border-gray-300 outline-none p-1 rounded-md w-[100px] " /></span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=> addToCart(singleData)} className="bg-pink-700 hover:bg-pink-600 text-white text-sm sm:text-base px-4 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <FaShoppingCart /> Add To Cart
              </button>
              <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-3 text-sm sm:text-base rounded-lg flex items-center justify-center gap-2 transition-colors">
                <LuWalletCards /> Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="p-4 sm:p-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {singleData.reviews && singleData.reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl">{review.reviewerName}</h3>
                  <span className="flex items-center bg-yellow-100 text-black rounded-full px-2 py-1 text-xs">
                    {review.rating}
                    <IoMdStarOutline className="ml-1 text-yellow-700" />
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};