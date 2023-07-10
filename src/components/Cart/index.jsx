import styles from "./Cart.module.css";

function Cart() {
  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>購物籃</h3>

      <section className={styles.cart__info}>
        <div className={styles.cart__text}>運費</div>
        <div className={styles.cart__price}>免費</div>
      </section>
      <section className={styles.cart__info}>
        <div className={styles.cart__text}>小計</div>
        <div className={styles.cart__price}>total:</div>
      </section>
    </section>
  );
}

export default Cart;
