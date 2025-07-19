

 import { FaShoppingCart } from "react-icons/fa";
 import { IoMdStarOutline } from "react-icons/io";
import Lottie from "react-lottie";
 import { NavLink } from "react-router-dom";
 import notfoundAnimation from '../assets/No Data Animation.json'
import { getCartContext } from "../context/CartContext";


export const ProductCard = ({searchData, page}) => {

  const {addToCart} = getCartContext();
 

  let defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notfoundAnimation
  }
   
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 md:mt-12">
          {searchData.length > 0 ?
           (
            
            searchData.slice(page * 8 - 8, page * 8).map((product) => {
            return (
              <div
                key={product.id}
                className="md:h-[470px] lg:h-[520px] relative bg-white p-4 flex flex-col text-start border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center  absolute top-4 right-4 bg-yellow-300 text-gray-800 text-base font-bold px-2.5 py-0.5 rounded-full">
                  {product.rating}<IoMdStarOutline className="text-[20px] text-yellow-700 -mt-1 ml-1 " />
                </span>
                <NavLink to={`/products/${product.id}`}><div className="w-full  flex items-center justify-center overflow-hidden rounded-md mb-2" >
                  <img
                    src={product.thumbnail }
                    alt={product.title}
                    className="object-contain  h-full w-full"
                  />
                </div></NavLink>
                <h1 className="text-xl line-clamp-1 font-bold mb-1">{product.title}</h1>
                <span className="font-bold text-2xl mb-3 ">₹{product.price}</span>
                <p className="font-bold text-lg text-red-500"><i>{product.discountPercentage}</i>% OFF</p>
                <p className="line-clamp-3 opacity-80">About this product:{product.description}</p>
                <button className="bg-pink-700 text-white px-3 py-2 rounded-lg w-full flex items-center justify-center gap-2 hover:bg-pink-600 focus:ring-2 focus:ring-pink-500 transition-colors mt-5" onClick={()=> addToCart(product)}>
                  <FaShoppingCart /> Add To Cart
                </button>
              </div>
            )
          })
            
          ) : 
          (
            <>
            <div className="flex sm:items-center sm:justify-center  md:mt-[-500px] ">
              <Lottie options={defaultOptions} height={400} width={400} />

            </div>
            </>
          )}
        </div>
    </>
  );
};
