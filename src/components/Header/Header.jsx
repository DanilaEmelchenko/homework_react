import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles['header']}>
      <img src='./icons/logo.svg' alt="logo" />

      <nav className={styles['navbar']}>
        <ul className={styles['nav-menu']}>
          <li className={styles['nav-item']}>
            <a href='#' className={styles['nav-link--active']}
            >Поиск фильмов
            </a>
          </li>

          <li className={styles['nav-item']}>
            <a href='#' className={styles['nav-link']}>
              Мои фильмы
            </a>
            <span className={styles['nav-count']}>2</span>
          </li>

          <li className={styles['nav-item']}>
            <a href='#' className={styles['nav-link']}>
              Войти
              <img
                src='./icons/login.svg'
                alt='login'
                className={styles['nav-image']}
              />
            </a>
          </li>
        </ul >
      </nav >
    </header >
  );
}

export default Header;