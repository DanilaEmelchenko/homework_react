import styles from './Button.module.css';
import { useState } from 'react';

function Button({ text }) {
  const [buttonText, setButtonText] = useState(text);

  const handleClick = () => {
    if (buttonText === 'Искать') {
      setButtonText('Войти в профиль');
    } else {
      setButtonText('Искать');
    }
  };

  return (
    <button className={styles['button']} onClick={handleClick}>{buttonText}</button>
  );
}

export default Button;