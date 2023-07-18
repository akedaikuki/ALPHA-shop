import styles from "./Step2.module.css";
import { useContext } from "react";
import { ShippingContext } from "../../Context/ShippingContext";

function RadioGroup({ price, id, name, priceText, period, checked }) {
  const { onShippingPrice } = useContext(ShippingContext);
  return (
    <label className={styles.radio__group} data-price={price}>
      <input
        id={id}
        type="radio"
        name="shipping"
        defaultChecked={checked}
        onClick={() => {
          onShippingPrice?.({ price });
        }}
      />
      <div className={styles.radio__info}>
        <div className={styles.radio__info__container}>
          <div className={styles.text}>{name}</div>
          <div className={styles.price}>{priceText}</div>
        </div>
        <div className={styles.period}>{period}</div>
      </div>
      <div className={styles.radio__box}></div>
    </label>
  );
}

function Step2() {
  const { shippingPrice } = useContext(ShippingContext);
  return (
    <form className={styles.form__container} data-phase="shipping">
      <h3 className={styles.form__title}>運送方式</h3>

      <section className={styles.form__body}>
        <div className={styles.radio__group__container}>
          <RadioGroup
            price="免費"
            id="standard"
            checked={shippingPrice === "免費" ? true : false}
            name="標準運送"
            priceText="免費"
            period="約 3~7 個工作天"
          />
        </div>
        <div className={styles.radio__group__container}>
          <RadioGroup
            price="$500"
            id="DHL"
            checked={shippingPrice === "$500" ? true : false}
            name="DHL貨運"
            priceText="$500"
            period="48小時內送達"
          />
        </div>
      </section>
    </form>
  );
}

export default Step2;
