import React from "react";
import styles from "./Step3.module.css";
import { useContext } from "react";
import { FormContext } from "../../Context/FormContext";
function InputGroup({ id, label, type, placeholder, maxLength, name }) {
  const { inputChange } = useContext(FormContext);
  return (
    <div className={id}>
      <div className={styles.input__label}>{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        name={name}
        onChange={(e) => {
          inputChange(e);
        }}
      />
    </div>
  );
}

function Step3() {
  return (
    <form className={styles.form__container} data-phase="credit-card">
      <h3 className={styles.form__title}>付款資訊</h3>
      <section className={styles.form__body}>
        <div className={styles.input__container}>
          <InputGroup
            className={styles.card__name}
            id="card__name"
            type="text"
            label="持卡人姓名"
            placeholder="John Doe"
            name="card_Name"
          />
        </div>

        <div className={styles.input__container}>
          <InputGroup
            className={styles.card__number}
            id="card__number"
            type="text"
            label="卡號"
            placeholder="1111 2222 3333 4444"
            name="card_Num"
          />
        </div>

        <div className={styles.input__container__3}>
          <InputGroup
            className={styles.card__date}
            id="card__date"
            type="text"
            label="有效期限"
            placeholder="MM/YY"
            name="card_Date"
          />

          <InputGroup
            className={styles.card__cvc}
            id="card__cvc"
            type="text"
            label="CVC / CCV"
            placeholder="123"
            maxLength="3"
            name="card_Cvc"
          />
        </div>
      </section>
    </form>
  );
}

export default Step3;
