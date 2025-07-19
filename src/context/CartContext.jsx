import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  let addToCart = (product) => {
    let itemCart = cartData.find((item) => item.id === product.id);
    if (itemCart) {
      let updatedcart = cartData.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartData(updatedcart);
      toast.success("Product already added to cart!")
      
    } else {
      setCartData([...cartData, { ...product, quantity: 1 }]);
      toast.success("Product is added to cart!")
    }
  };

  let updatedQuantity = ( productId, action) => {
    setCartData(
      cartData
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = newUnit + 1;
              toast.success("Product Quantity is increse")
            } else if (action === "decrease") {
              newUnit = newUnit - 1;
              toast.success("Product Quantity is decrease")
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const handleDelete = (item) => {
    let filteredCart = cartData.filter((product) => item.id !== product.id);
    setCartData(filteredCart);
    toast.success("Product is deleted")
  };
  return (
    <CartContext.Provider
      value={{
        cartData,
        setCartData,
        addToCart,
        handleDelete,
        updatedQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const getCartContext = () => useContext(CartContext);
