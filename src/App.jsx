
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import { SingleProduct } from './pages/SingleProduct'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCategory from './pages/ProductCategory'
import { getCartContext } from './context/CartContext'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
   const [location, setLocation] = useState(null);
    const [dropdown, setDropdown] = useState(false);
    const {cartData, setCartData} = getCartContext();
     const [isCartRestored, setIsCartRestored] = useState(false); 
    

    const getLocation = ()=>{
        navigator.geolocation.getCurrentPosition(async pos=>{
            const {longitude, latitude} = pos.coords;
            // console.log(longitude, latitude)
            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=en`;
            try {
                const location = await axios.get(url);
                const exactLocation = location.data.address
                // console.log(exactLocation)
                setLocation(exactLocation);
                setDropdown(false)
                
                
            } catch (error) {
                console.log(error)
                
            }
        })

    }
    useEffect(()=>{
        getLocation()
    },[])

    
  useEffect(() => {
    try {
      const storedData = localStorage.getItem("cartItem");
      if (storedData) {
        setCartData(JSON.parse(storedData));
      }
      setIsCartRestored(true);
    } catch (err) {
      console.error("Failed to restore cart from localStorage", err);
    } 
  }, []);

 
  useEffect(() => {
    if (isCartRestored) {
      localStorage.setItem("cartItem", JSON.stringify(cartData));
    }
  }, [cartData, isCartRestored]); 

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout location={location} getLocation={getLocation} dropdown={dropdown} setDropdown={setDropdown}/>,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/products/:productId",
          element: <SingleProduct />
        },
        {
          path: "/category/:category",
          element: <ProductCategory />

        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/cart",
          element: <ProtectedRoute><Cart getLocation={getLocation} location={location} /></ProtectedRoute>
        },
        
      ]
    }
  ])
 

  return <RouterProvider router={router}></RouterProvider>
}

export default App
