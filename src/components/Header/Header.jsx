import './Header.css';

function Header() {
  return (
    <header className='header'>
      <img src='./icons/logo.svg' alt="logo" />
      <nav className='navbar'>
        <ul className='nav-menu'>
          <li className='nav-item'><a href='#' className='nav-link active'>Поиск фильмов</a></li>
          <li className='nav-item'><a href='#' className='nav-link'>Мои фильмы</a><span className='nav-count'>2</span></li>
          <li className='nav-item'><a href='#' className='nav-link'>Войти<img src='./icons/login.svg' alt='login' className='nav-image' /></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;