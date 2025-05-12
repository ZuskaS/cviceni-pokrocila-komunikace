import './style.css';
import { useState } from 'react';

export const Product = ({ image, name, price, onAddToCart }) => {
  const [count, setCount] = useState(0);

  return (
    <div
      className="product"
      onClick={() => {
        onAddToCart(price);
        setCount(count + 1);
      }}
    >
      <img src={image} className="product__image" />
      <div className="product__body">
        {name}: {price} Kč <br />
        {count} ks
      </div>
    </div>
  );
};
