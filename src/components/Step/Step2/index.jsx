import styles from "./Step2.module.css";

function RadioGroup({ price, id, name, priceText, period, checked }) {
  return (
    <label className={styles.radio__group} data-price={price}>
      <input id={id} type="radio" name="shipping" defaultChecked={checked} />
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

function Step2({ clickChange, shippingCost }) {
  // const price = 0;
  return (
    <form className={styles.form__container} data-phase="shipping">
      <h3 className={styles.form__title}>運送方式</h3>

      <section className={styles.form__body}>
        <div className={styles.radio__group__container}>
          <RadioGroup
            shippingCost={shippingCost}
            price={0}
            id="standard"
            checked={shippingCost === 0 ? true : false}
            name="標準運送"
            priceText="免費"
            period="約 3~7 個工作天"
            onClick={clickChange}
          />
        </div>
        <div className={styles.radio__group__container}>
          <RadioGroup
            shippingCost={shippingCost}
            price={500}
            id="DHL"
            checked={shippingCost === 500 ? true : false}
            name="DHL貨運"
            priceText="$500"
            period="48小時內送達"
            onClick={clickChange}
          />
        </div>
      </section>
    </form>
  );
}

export default Step2;
