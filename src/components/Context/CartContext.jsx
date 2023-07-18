import { createContext } from "react";
import { useState } from "react";
import itemsData from "../Cart/CartData";
import { useContext } from "react";
import { ShippingContext } from "../Context/ShippingContext";

const CartContext = createContext();
function CartContextProvider({ children }) {
  const [nowItems, setNowtItems] = useState(itemsData);
  const { shippingPrice } = useContext(ShippingContext);
  const total = function isTotal() {
    let total = 0;
    nowItems.map((item) => (total = total + item.price * item.quantity));
    return (total = shippingPrice === "$500" ? total + 500 : total);
  };

  return (
    <CartContext.Provider
      value={{
        nowItems,
        setNowtItems,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartContextProvider };
