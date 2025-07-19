// import { getData } from "../context/DataContext";
// import { X } from "lucide-react";

// const FilterProduct = ({
//   search,
//   setSearch,
//   brandData,
//   setBrandData,
//   categoryData,
//   setCategoryData,
//   price,
//   setPrice,
//   isFilterOpen,
//   setIsFilterOpen,
// }) => {
//   const { category, brand } = getData();

//   const handleCategory = (event) => {
//     setCategoryData(event.target.value);
//     if (window.innerWidth < 768) {
//       setIsFilterOpen(false);
//     }
//   };

//   const handleBrand = (event) => {
//     setBrandData(event.target.value);
//     if (window.innerWidth < 768) {
//       setIsFilterOpen(false);
//     }
//   };

//   const handleResetButton = () => {
//     setSearch("");
//     setBrandData("All");
//     setCategoryData("All");
//     setPrice([0, 2500]);
//     if (window.innerWidth < 768) {
//       setIsFilterOpen(false);
//     }
//   };

//   return (
//     <>
//       <div
//         className={`fixed inset-0 z-50 bg-white p-4 w-full md:relative md:inset-auto md:z-auto md:bg-gray-100 md:p-4 md:w-[240px] lg:w-[280px] md:mt-8 rounded-xl shadow-sm flex-shrink-0
//                   transform transition-transform duration-300 ease-in-out
//                   ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
//                   md:translate-x-0`}
//       >
//         {/* Close button for mobile filter */}
//         <div className="md:hidden flex justify-end mb-4">
//           <button
//             onClick={() => setIsFilterOpen(false)}
//             className="p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
//             aria-label="Close filter menu"
//           >
//             <X className="h-6 w-6" />
//           </button>
//         </div>

//         <div className="flex flex-col space-y-8">
//           <input
//             type="text"
//             placeholder="Search product..."
//             className="border-2 border-gray-400 outline-none p-2 rounded-lg w-full"
//             value={search}
//             onChange={(event) => setSearch(event.target.value)}
//           />
//           <div>
//             <h1 className="font-bold text-lg mb-3">Category</h1>
//             <div className="grid gap-2">
//               {category.map((item, index) => {
//                 return (
//                   <label
//                     key={item || index}
//                     className="flex items-center space-x-2 cursor-pointer"
//                   >
//                     <input
//                       type="checkbox"
//                       className="accent-pink-600 h-4 w-4"
//                       value={item}
//                       checked={categoryData === item}
//                       onChange={handleCategory}
//                     />
//                     <span className="uppercase opacity-80 text-[15px]">
//                       {item}
//                     </span>
//                   </label>
//                 );
//               })}
//             </div>
//           </div>
//           <div>
//             <h1 className="font-bold text-lg mb-3">Brand</h1>
//             <select
//               name="brand"
//               id="brand"
//               className="p-2 w-full border border-gray-300 rounded-md outline-none"
//               onChange={handleBrand}
//               value={brandData}
//             >
//               {brand.map((item, index) => {
//                 return (
//                   <option key={item || index} value={item}>
//                     {item}
//                   </option>
//                 );
//               })}
//             </select>
//           </div>
//           <div className="flex flex-col">
//             <h1 className="font-bold text-lg mb-3">Price Range</h1>
//             <div className="flex flex-col space-y-3">
//               <p>
//                 Price: ₹{price[0]} - ₹{price[1]}
//               </p>
//               <input
//                 type="range"
//                 min={0}
//                 max={2500}
//                 name="price"
//                 id="price"
//                 className="w-full accent-pink-700"
//                 value={price[1]}
//                 onChange={(event) =>
//                   setPrice([price[0], Number(event.target.value)])
//                 }
//               />
//               <button
//                 className="bg-pink-700 rounded-lg text-white px-4 py-2 w-full md:w-[150px] hover:bg-pink-600 focus:ring-2 focus:ring-pink-500 transition-colors"
//                 onClick={handleResetButton}
//               >
//                 Reset Filter
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default FilterProduct;



"use client"

import { X } from "lucide-react"
import { getData } from "../context/DataContext"

const FilterProduct = ({
  search,
  setSearch,
  brandData,
  setBrandData,
  categoryData,
  setCategoryData,
  price,
  setPrice,
  isFilterOpen,
  setIsFilterOpen,
}) => {
  const { category, brand } = getData()

  const handleCategory = (event) => {
    setCategoryData(event.target.value)
    if (window.innerWidth < 768) {
      setIsFilterOpen(false)
    }
  }

  const handleBrand = (event) => {
    setBrandData(event.target.value)
    if (window.innerWidth < 768) {
      setIsFilterOpen(false)
    }
  }

  const handleResetButton = () => {
    setSearch("")
    setBrandData("All")
    setCategoryData("All")
    setPrice([0, 2500])
    if (window.innerWidth < 768) {
      setIsFilterOpen(false)
    }
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-white p-4 w-full md:relative md:inset-auto md:z-auto md:bg-gray-100 md:p-4 md:w-[240px] lg:w-[280px] md:mt-8 rounded-xl shadow-sm flex-shrink-0
                    transform transition-transform duration-300 ease-in-out
                    ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0 overflow-y-auto`}
      >
        {/* Close button for mobile filter */}
        <div className="md:hidden flex justify-end mb-4">
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-label="Close filter menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col space-y-8">
          <input
            type="text"
            placeholder="Search product..."
            className="border-2 border-gray-400 outline-none p-2 rounded-lg w-full"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <div>
            <h1 className="font-bold text-lg mb-3">Category</h1>
            <div className="grid gap-2">
              {category.map((item, index) => {
                return (
                  <label key={item || index} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="accent-pink-600 h-4 w-4"
                      value={item}
                      checked={categoryData === item}
                      onChange={handleCategory}
                    />
                    <span className="uppercase opacity-80 text-[15px]">{item}</span>
                  </label>
                )
              })}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-3">Brand</h1>
            <select
              name="brand"
              id="brand"
              className="p-2 w-full border border-gray-300 rounded-md outline-none"
              onChange={handleBrand}
              value={brandData}
            >
              {brand.map((item, index) => {
                return (
                  <option key={item || index} value={item}>
                    {item}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-lg mb-3">Price Range</h1>
            <div className="flex flex-col space-y-3">
              <p>
                Price: ₹{price[0]} - ₹{price[1]}
              </p>
              <input
                type="range"
                min={0}
                max={2500}
                name="price"
                id="price"
                className="w-full accent-pink-700"
                value={price[1]}
                onChange={(event) => setPrice([price[0], Number(event.target.value)])}
              />
              <button
                className="bg-pink-700 rounded-lg text-white px-4 py-2 w-full md:w-[150px] hover:bg-pink-600 focus:ring-2 focus:ring-pink-500 transition-colors"
                onClick={handleResetButton}
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterProduct
