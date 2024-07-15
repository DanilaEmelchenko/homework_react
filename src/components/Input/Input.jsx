import styles from './Input.module.css';

function Input() {
  return (
    <>
      <label htmlFor="search" className={styles['input']}>
        <input type="search" className={styles['input-search']} placeholder='Введите название' />
        <img src="./icons/search.svg" alt="search" className={styles['input-image']} />
      </label>
    </>
  );
}

export default Input;