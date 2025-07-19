

import axios from "axios";
import  { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { FaChevronLeft,} from "react-icons/fa";
import { getCartContext } from "../context/CartContext";
import Lottie from "react-lottie";
import loadingAnimation from "../assets/Confetti - Animation 01.json";
import CategoryListProduct from "../components/CategoryListProduct";

function ProductCategory() {
  const [categorytData, setCategoryData] = useState([]);
  const { addToCart } = getCartContext();

  const params = useParams();
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  const url = `https://dummyjson.com/products/category/${params.category}`;

  const getCategoryData = async () => {
    const response = await axios.get(url);
    const exactData = response.data.products;
    setCategoryData(exactData);
  };

  useEffect(() => {
    getCategoryData();
    window.scrollTo(0, 0);
  }, []);

  const defaultAnimation = {
    loop: true,
    animationData: loadingAnimation,
    autoplay: true,
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <button
          className="p-2 text-lg sm:text-xl rounded-xl bg-blue-600 hover:bg-blue-700 text-white mb-6 flex items-center transition-colors duration-200 lg:ml-[130px]"
          onClick={handleBackButton}
        >
          <FaChevronLeft className="mr-2" /> Back
        </button>

        {categorytData.length > 0 ? (
          <CategoryListProduct addToCart={addToCart} categorytData={categorytData}/>
        ) : (
          <div className="flex items-center justify-center">
            <Lottie options={defaultAnimation} width={300} height={300} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCategory;
