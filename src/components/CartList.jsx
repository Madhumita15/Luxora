
import React from "react";
import { MdDeleteForever } from "react-icons/md";

function CartList({cartData, handleDelete, updatedQuantity}) {
    
  return (
    <>
      {cartData.map((item) => {
        return (
          <div
            className="bg-white rounded-xl shadow-md overflow-hidden mb-6 transition-all duration-300 hover:shadow-lg"
            key={item.id}
          >
            <div className="p-4 flex items-center">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg flex-shrink-0"
              />

              <div className="flex-1 ml-4 flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="mr-4">
                  <h1 className="text-xl font-semibold text-gray-800 line-clamp-1">
                    {item.title}
                  </h1>
                  <p className="text-lg text-pink-600 font-medium mt-1">
                    ₹{item.price}
                  </p>
                </div>

                <div className="mt-3 sm:mt-0 flex items-center">
                  <div className="bg-pink-100 flex items-center justify-between rounded-full px-4 py-1 w-32">
                    <button
                      onClick={() => updatedQuantity(item.id, "decrease")}
                      className="text-pink-700 text-xl hover:text-pink-900 focus:outline-none"
                    >
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updatedQuantity(item.id, "increase")}
                      className="text-pink-700 text-xl hover:text-pink-900 focus:outline-none"
                    >
                      +
                    </button>
                  </div>

                  <button className="ml-4 text-red-500 hover:text-red-700 transition-colors">
                    <MdDeleteForever
                      className="text-3xl"
                      onClick={() => handleDelete(item)}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartList;
