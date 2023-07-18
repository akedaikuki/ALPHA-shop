import { createContext, useState, useEffect } from "react";

const ShippingContext = createContext();

function ShippingContextProvider({ children }) {
  const [shippingPrice, setShippingPrice] = useState("免費");

  function handleShippingPrice({ price }) {
    setShippingPrice(price);
  }
  useEffect(() => {}, []);

  return (
    <ShippingContext.Provider
      value={{ shippingPrice, onShippingPrice: handleShippingPrice }}
    >
      {children}
    </ShippingContext.Provider>
  );
}

export { ShippingContext, ShippingContextProvider };
