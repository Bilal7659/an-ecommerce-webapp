import { createContext, useContext, useState } from "react";
import { productsData } from "./Component/Data/Data";

const MyContext = createContext();

export const useMyContext = () => {
  return useContext(MyContext);
};

export const MyContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const allData = {
    cart,
    setCart,
  };
  return <MyContext.Provider value={allData}>{children}</MyContext.Provider>;
};
