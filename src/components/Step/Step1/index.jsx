import React from "react";
import styles from "./Step1.module.css";
import StepOneData from "./Step1Data";

function SelectTitle({ label, datas }) {
  return (
    <div className={styles.selectgroup__container__1}>
      <div className={styles.input__label}>{label}</div>
      <div className={styles.select__container}>
        <select required>
          {datas.map((data) => {
            return (
              <option value={data.value} key={data.value}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

function SelectCity({ label, datas }) {
  return (
    <div className={styles.selectgroup__container}>
      <div className={styles.input__label}>{label}</div>
      <div className={styles.select__container}>
        <select required>
          {datas.map((data) => {
            return (
              <option value={data.value} key={data.value}>
                {data.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

function InputGroup({ id, label, type, placeholder, maxLength, name }) {
  return (
    <div className={id}>
      <div className={styles.input__label}>{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        name={name}
      />
    </div>
  );
}

function Step1() {
  return (
    <form className={styles.form__container} data-phase="address">
      <h3 className={styles.form__title}>寄送地址</h3>
      <section className={styles.form__body}>
        <div className={styles.input__container__1}>
          <SelectTitle label="稱謂" datas={StepOneData.title} name="title" />
          <InputGroup
            id="input__name"
            label="姓名"
            type="text"
            placeholder="請輸入姓名"
            name="name"
          />
        </div>

        <div className={styles.input__container}>
          <InputGroup
            id="input__mobile"
            label="電話"
            type="text"
            placeholder="請輸入行動電話"
            maxLength="10"
            name="mobile"
          />
          <InputGroup
            id="input__email"
            label="Email"
            type="email"
            placeholder="請輸入電子郵件"
            name="email"
          />
        </div>

        <div className={styles.input__container}>
          <SelectCity label="縣市" datas={StepOneData.city} name="city" />
          <InputGroup
            id="input__address"
            label="地址"
            type="text"
            placeholder="請輸入地址"
            name="address"
          />
        </div>
      </section>
    </form>
  );
}

export default Step1;
