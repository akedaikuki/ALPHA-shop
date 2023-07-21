import { createContext, useState } from "react";
import itemsData from "../components/Cart/CartData";
import { useContext } from "react";
import { ShippingContext } from "./ShippingContext";

const CartContext = createContext();
function CartContextProvider({ children }) {
  const [nowItems, setNowtItems] = useState(itemsData);
  const { shippingPrice } = useContext(ShippingContext);
  const total = function isTotal() {
    let total = 0;
    nowItems.map((item) => (total = total + item.price * item.quantity));
    return (total = shippingPrice === 500 ? total + 500 : total);
  };

  // const total = itemsData.reduce((accumulator, item) => {
  //   const itemtotal = item.price * item.quantity;
  //   console.log(accumulator)
  //   console.log(itemtotal)
  //   return accumulator + itemtotal;
  // }, 0);

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
