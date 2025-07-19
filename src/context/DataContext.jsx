import {  createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const [apiData, setApiData] = useState([]);

 //all products
    const getProducts = async()=>{
        let url = "https://dummyjson.com/products?limit=194";
        const response = await axios.get(url);
        const exactData = response.data.products;
        setApiData(exactData);
        // console.log(exactData)

    }

    useEffect(()=>{
        getProducts()
        window.scrollTo(0,0)
    }, [])
    
    // product category data
    const getProductCategory = (data, property) => {
    let newVal = data.map((curElem) => curElem[property])
    newVal = ["All",...new Set(newVal)] 
    return newVal
  }

  const category = getProductCategory(apiData, "category")

  //product brand data

  const getProductBrand = (data, property)=>{
    let newVal = data.map((curElem)=>{
        return curElem[property]
    })
    newVal = ["All",...new Set(newVal)]
    return newVal
  }

  const brand = getProductBrand(apiData, "brand")



    return <DataContext.Provider value={{apiData, setApiData, getProducts, category, brand}}>{children}</DataContext.Provider>
}

export const getData = ()=>  useContext(DataContext);