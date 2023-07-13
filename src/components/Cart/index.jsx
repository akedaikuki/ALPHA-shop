import styles from "./Cart.module.css";
import itemsData from "./CartData";
import { ReactComponent as PlusBtn } from "../../icons/plus.svg";
import { ReactComponent as MinusBtn } from "../../icons/minus.svg";
import {
  useState,
  // useEffect
} from "react";

function ItemList({ items, minus, plus }) {
  const totalItems = items.map((item) => (
    <div className={styles.item__container} key={item.id}>
      <img className={styles.item__image} src={item.img} alt={item.name} />
      <div className={styles.item__info}>
        <div className={styles.item__name}>{item.name}</div>
        <div className={styles.item__control__container}>
          <div className={styles.item__control}>
            <MinusBtn
              className={styles.item__control__btn}
              onClick={() => minus(item.id)}
            />
            <span className={styles.item__count}>{item.quantity}</span>
            <PlusBtn
              className={styles.item__control__btn}
              onClick={() => plus(item.id)}
            />
          </div>
        </div>
        <div className={styles.item__price}>${item.price}</div>
      </div>
    </div>
  ));
  return <section className={styles.item__list}>{totalItems}</section>;
}

function CartInfo({ text, price }) {
  return (
    <section className={styles.cart__info}>
      <div className={styles.cart__text}>{text}</div>
      <div className={styles.cart__price}>{price === 0 ? "免費" : price}</div>
    </section>
  );
}

function Cart() {
  const [nowItems, setNowtItems] = useState(itemsData);
  // 暫時設定使用 DHL貨運運費
  const price = 500;
  const [shippingCost, setShippingCost] = useState(price);

  const costChange = () => {
    setShippingCost((curr) => (curr === 500 ? 0 : 500));
  };
  // useEffect(() => {}, [shippingCost]);
  const total = function isTotal() {
    let total = 0;

    nowItems.map((item) => (total = total + item.price * item.quantity));
    return (total = shippingCost === 500 ? total + 500 : total);
  };

  function handleClickPlus(id) {
    setNowtItems(
      nowItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  function handleClickMinus(id) {
    let newNowItems = nowItems.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setNowtItems(newNowItems.filter((item) => item.quantity !== 0));
  }

  return (
    <section className={styles.cart__container}>
      <h3 className={styles.cart__title}>購物籃</h3>
      <ItemList
        value={{ nowItems, setNowtItems }}
        items={nowItems}
        plus={handleClickPlus}
        minus={handleClickMinus}
        onChange={costChange}
      />
      <CartInfo info={"shipping"} text="運費" price={shippingCost} />
      <CartInfo info={"total"} text={"小計"} price={total()} />
    </section>
  );
}

export default Cart;
