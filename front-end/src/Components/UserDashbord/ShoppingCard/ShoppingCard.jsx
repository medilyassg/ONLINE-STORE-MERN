import React from 'react';
import styles from './ShoppingCart.module.css';

function ShoppingCart(props) {
  const totalPrice = props.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <div className={styles.cart}>
        {props.cart.map((item) => (
          <div className={styles.item} key={item.id}>
            <img className={styles.image} src={item.image} alt={item.name} />
            <div className={styles.details}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.price}>
                Price: ${item.price.toFixed(2)}
              </p>
              <p className={styles.quantity}>Quantity: {item.quantity}</p>
              <button
                className={styles.removeButton}
                onClick={() => props.removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className={styles.total}>
          <p className={styles.totalLabel}>Total:</p>
          <p className={styles.totalPrice}>${totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
