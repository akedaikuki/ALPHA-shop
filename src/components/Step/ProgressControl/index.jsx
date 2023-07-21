import { ReactComponent as LeftArrow } from "../../../assets/icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../assets/icons/right-arrow.svg";

import styles from "./ProgressControl.module.css";

function ProgressControl({ clickPrev, clickNext, nowStep }) {
  return (
    <section className={styles.control__container}>
      <section className={styles.button__group}>
        <button
          onClick={clickPrev}
          disabled={nowStep === 1}
          className={[styles.button__prev, styles.button].join(" ")}
        >
          <LeftArrow className={styles.arrow__left} />
          <div className={styles.button__text}>上一步</div>
        </button>
        <button
          onClick={clickNext}
          className={
            nowStep === 1 ? styles.button__next__one : styles.button__next
          }
        >
          <div className={styles.button__text}>
            {nowStep === 3 ? "準備結帳" : "下一步"}
          </div>
          {nowStep < 3 && <RightArrow className={styles.arrow__right} />}
        </button>
      </section>
    </section>
  );
}

export default ProgressControl;
