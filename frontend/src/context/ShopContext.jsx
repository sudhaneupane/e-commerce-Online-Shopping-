import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "Rs.";
  const deliveryFee = 75;

  const value = {
    products,
    currency,
    deliveryFee,
  };
  
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
