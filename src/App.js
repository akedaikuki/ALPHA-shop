import "./App.css";
import Step from "./components/Step";
import Cart from "./components/Cart";
import styles from "./components/Step/base.module.css";
import { useState } from "react";

function App() {
  const [shippingCost, setShippingCost] = useState(0);

  function handleChange() {
    setShippingCost((shippingCost) => (shippingCost === 0 ? 0 : 500));
  }

  return (
    <div className="App">
      <main className={styles.site__main}>
        <div className={styles.main__container}>
          <Step shippingCost={shippingCost} clickChange={handleChange} />
          <Cart shippingCost={shippingCost} clickChange={handleChange} />
        </div>
      </main>
    </div>
  );
}

export default App;
