import "./App.css";
import Step from "./components/Step";
import Cart from "./components/Cart";
import styles from "./components/Step/base.module.css";
import { CartContextProvider } from "./Context/CartContext";
import { FormContextProvider } from "./Context/FormContext";
import { ShippingContextProvider } from "./Context/ShippingContext";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <main className={styles.site__main}>
        <div className={styles.main__container}>
          <FormContextProvider>
            <ShippingContextProvider>
              <CartContextProvider>
                <Step />
                <Cart />
              </CartContextProvider>
            </ShippingContextProvider>
          </FormContextProvider>
        </div>
      </main>
    </div>
  );
}

export default App;
