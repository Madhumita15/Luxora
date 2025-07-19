
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getData } from "../context/DataContext"
import { NavLink } from "react-router-dom"

export const Category = () => {
  const {apiData} = getData()
  const scrollContainerRef = useRef(null)

  const getProductCategory = (data, property) => {
    let newVal = data.map((curElem) => curElem[property])
    newVal = [...new Set(newVal)] 
    return newVal
  }

  const category = getProductCategory(apiData, "category")

  

  const scroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" })
    }
  }

  return (
    <div className="relative flex items-center justify-center py-8 px-4 bg-black">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll(-200)}
        className="absolute left-2 z-10 md:flex items-center justify-center w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>

      {/* Categories Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto whitespace-nowrap scroll-smooth gap-4 py-2 px-2 md:px-0"
        style={{
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none', 
        }}
      >
        <div className="flex hide-scrollbar gap-4">
          {category.map((item, index) => (
            <div key={index} className="flex-shrink-0">
             <NavLink to={`/category/${item}`}> <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded-lg w-[150px] focus:ring-2 focus:ring-purple-500 hover:from-pink-600 hover:to-purple-600 transition-colors">
                {item}
              </button></NavLink>
            </div>
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll(200)}
        className="absolute right-2 z-10 md:flex items-center justify-center w-10 h-10 bg-pink-600 hover:bg-pink-500 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}
