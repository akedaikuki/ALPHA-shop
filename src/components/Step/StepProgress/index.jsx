import React from "react";
import styles from "./StepProgress.module.css";

function Step({ nowStep, step, label }) {
  return (
    <span className={styles.progress__group}>
      <span
        className={
          nowStep >= step
            ? styles.progress__circle__done
            : styles.progress__circle__undone
        }
      >
        {nowStep > step ? <div className={styles.icon} /> : step}
      </span>
      <span
        className={
          nowStep >= step
            ? styles.progress__label__done
            : styles.progress__label__undone
        }
      >
        {label}
      </span>
    </span>
  );
}

function ProgressBar({ className }) {
  return <span className={className}></span>;
}

function StepProgress() {
  const nowStep = 1;
  return (
    <div className={styles.progress}>
      <h2 className={styles.progress__title}>結帳</h2>
      <section className={styles.progress__container}>
        <Step nowStep={nowStep} step={1} label="寄送地址" />

        <ProgressBar className={styles.progress__bar} />

        <Step nowStep={nowStep} step={2} label="運送方式" />

        <ProgressBar
          className={
            nowStep >= 2 ? styles.progress__bar : styles.progress__bar__undone
          }
        />

        <Step nowStep={nowStep} step={3} label="付款資訊" />
      </section>
    </div>
  );
}

export default StepProgress;
