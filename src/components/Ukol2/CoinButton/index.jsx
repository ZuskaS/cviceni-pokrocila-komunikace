import './style.css';
import { useState } from 'react';

export const CoinButton = ({ value, onCoinClick }) => {
  return (
    <button
      className="icon-button"
      onClick={() => {
        onCoinClick(value);
      }}
    >
      <i className="plus-icon" />
      <div className="button-label">{value}</div>
    </button>
  );
};
