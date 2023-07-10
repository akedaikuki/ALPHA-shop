import "./App.css";
import Step from "./components/Step";
import Cart from "./components/Cart";
import styles from "./components/Step/base.module.css";

function App() {
  return (
    <div className="App">
      <main className={styles.site__main}>
        <div className={styles.main__container}>
          <Step />
          <Cart />
        </div>
      </main>
    </div>
  );
}

export default App;
