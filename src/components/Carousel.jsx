import { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getData } from "../context/DataContext";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Category } from "./Category";
import { NavLink } from "react-router-dom";

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute !right-4 md:!right-8 top-1/2 -translate-y-1/2 z-50
                   bg-pink-700 hover:bg-pink-600 text-white rounded-full p-3 md:p-4
                   transition-all flex items-center justify-center w-14 h-14 md:w-16 md:h-16"
        aria-label="Next slide"
      >
        <AiOutlineArrowRight className="h-8 w-8 md:h-10 md:w-10" />
      </button>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute !left-4 md:!left-8 top-1/2 -translate-y-1/2 z-50
                   bg-pink-700 hover:bg-pink-600 text-white rounded-full p-3 md:p-4
                   transition-all flex items-center justify-center w-14 h-14 md:w-16 md:h-16"
        aria-label="Previous slide"
      >
        <AiOutlineArrowLeft className="h-8 w-8 md:h-10 md:w-10" />
      </button>
    );
  };


function Carousel() {
  const { apiData } = getData();
  console.log(apiData.slice(0, 7));

  
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {apiData.slice(0, 7).map((product) => (
          <div
            key={product.id}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-purple-900 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] py-12 md:py-20 flex items-center"
          >
            <div
              className="container mx-auto px-4 md:px-6 lg:px-8 lg:ml-[150px]
                       grid grid-cols-1 md:grid-cols-2
                       gap-y-8 md:gap-x-8 lg:gap-0  items-center justify-center lg:mt-14"
            >
              <div className="flex flex-col space-y-6 max-w-full md:max-w-xl text-center md:text-left ">
                <p className="text-pink-300 text-lg md:text-xl">
                  Powering your world with the best product.
                </p>
                <h1 className="uppercase text-white text-3xl md:text-4xl lg:text-5xl font-bold line-clamp-2">
                  {product.title}
                </h1>
                <p className="text-white text-base md:text-lg line-clamp-3">
                  {product.description}
                </p>
                <NavLink to={"/products"}>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-lg w-[100px] focus:ring-2 focus:ring-purple-500">
                    Shop Now
                  </button>
                </NavLink>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white shadow-lg shadow-pink-300 flex items-center justify-center hover:scale-105 overflow-hidden lg:mr-[280px] mt-5 lg:mt-0 md:mt-0">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-[80%] h-[80%] object-contain transition-all "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <Category />
    </>
  );
}

export default Carousel;
