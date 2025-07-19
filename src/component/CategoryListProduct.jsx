import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';




function CategoryListProduct({addToCart, categorytData}) {
    
    return ( 
        <>
        <div className="grid gap-6 lg:ml-[130px] lg:mr-[130px]">
            {categorytData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-64 flex-shrink-0 p-4">
                    <NavLink
                      to={`/products/${item.id}`}
                      className="block h-full"
                    >
                      <div className="relative h-56 w-full bg-gray-100 rounded-lg flex items-center justify-center p-4">
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                        />

                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          {Math.round(item.discountPercentage)}% OFF
                        </div>
                      </div>
                    </NavLink>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h1 className="text-xl font-bold text-gray-800 mb-2 mt-10">
                      {item.title}
                    </h1>

                    <div className="flex items-center mb-3">
                      <span className="text-lg font-semibold text-gray-900 mr-2">
                        ₹{item.price}
                      </span>

                      <span className="text-sm text-gray-500 line-through">
                        ₹{Math.round(item.discountPercentage)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-1">
                      {item.description}
                    </p>
                    <div>
                      <button
                        className="w-full md:w-auto bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                        onClick={() => addToCart(item)}
                      >
                        <FaShoppingCart className="mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
     );
}

export default CategoryListProduct;