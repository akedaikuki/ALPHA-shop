import styles from "./Cart.module.css";
import itemsData from "./CartData";
import { ReactComponent as PlusBtn } from "../../icons/plus.svg";
import { ReactComponent as MinusBtn } from "../../icons/minus.svg";

function ItemList({ items }) {
  const totalItems = items.map((item) => (
    <div className={styles.item__container} key={item.id}>
      <img className={styles.item__image} src={item.img} alt={item.name} />
      <div className={styles.item__info}>
        <div className={styles.item__name}>{item.name}</div>
        <div className={styles.item__control__container}>
          <div className={styles.item__control}>
            <PlusBtn className={styles.item__control__btn} />
            <span className={styles.item__count}>{item.quantity}</span>
            <MinusBtn className={styles.item__control__btn} />
          </div>
        </div>
        <div className={styles.item__price}>${item.price}</div>
      </div>
    </div>
  ));
  return <section className={styles.item__list}>{totalItems}</section>;
}

function Cart() {
  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>購物籃</h3>
      <ItemList items={itemsData} />
      <section className={styles.cart__info}>
        <div className={styles.cart__text}>運費</div>
        <div className={styles.cart__price}>免費</div>
      </section>
      <section className={styles.cart__info}>
        <div className={styles.cart__text}>小計</div>
        <div className={styles.cart__price}>300</div>
      </section>
    </section>
  );
}

export default Cart;
