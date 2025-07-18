import React from 'react';
import styles from './Button.module.css';

function Button({ text }) {
  return (
    <button className={styles.customButton}>
      {text}
    </button>
  );
}

export default Button;
