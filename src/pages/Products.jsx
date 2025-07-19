
import { useState } from "react"
import { getData } from "../context/DataContext"
import { Menu} from "lucide-react" 
import FilterProduct from "../component/FilterProduct";
import { ProductCard } from "../component/ProductCard";
import loadingAnimation from '../assets/gradient loader 01.json'
import Lottie from "react-lottie";

export default function Products() {
  const { apiData } = getData()
  const [search, setSearch] = useState("")
  const [categoryData, setCategoryData] = useState("All")
  const [brandData, setBrandData] = useState("All")
  const [price, setPrice] = useState([0, 2500])
  const [page, setPage] = useState(1)
  const [isFilterOpen, setIsFilterOpen] = useState(false) 

  const totalPage = Math.ceil(apiData.length / 8)


  

  const handleNextButton = () => {
    if (page < totalPage) setPage(page + 1)
  }

  const handlePrevButton = () => {
    if (page > 1) setPage(page - 1)
  }

  const searchData = apiData.filter(
    (curData) =>
      curData.title.toLowerCase().includes(search.toLowerCase()) &&
      (categoryData === "All" || categoryData === curData.category) &&
      (brandData === "All" || brandData === curData.brand) &&
      curData.price >= price[0] &&
      curData.price <= price[1],
  )

  let defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation
  }


 

  return (
    <div className="container mx-auto px-4 py-8 md:py-14">
      {/* Mobile Filter Toggle Button */}
     {
        apiData.length > 0 ? (
            <>
             <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="p-2 rounded-md bg-pink-700 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-label="Open filter menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <FilterProduct
                search={search}
                setSearch={setSearch}
                categoryData={categoryData}
                setCategoryData={setCategoryData}
                brandData={brandData}
                setBrandData={setBrandData}
                price={price}
                setPrice={setPrice}
                isFilterOpen={isFilterOpen}
                setIsFilterOpen={setIsFilterOpen}
              /> 
        

        {/* Product Grid */}
        <ProductCard searchData={searchData} page={page}/>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-200">
        <button
          onClick={handlePrevButton}
          disabled={page === 1}
          className={`${
            page === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-pink-700 hover:bg-pink-600"
          } text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 transition-colors`}
        >
          Prev
        </button>
        <span className="text-lg font-semibold">
          Page {page} of {totalPage}
        </span>
        <button
          onClick={handleNextButton}
          disabled={page === totalPage}
          className={`${
            page === totalPage ? "bg-gray-400 cursor-not-allowed" : "bg-pink-700 hover:bg-pink-600"
          } px-4 py-2 text-white rounded-lg focus:ring-2 focus:ring-pink-400 transition-colors`}
        >
          Next
        </button>
      </div>
            </>
        ) : 
        (
            <>
            <div className="flex justify-center items-center text-4xl mt-[150px] md:mt-[200px]">
               <Lottie options={defaultOptions} height={200} width={200} />
            </div>
            </>
        )
     }
    </div>
  )
}
