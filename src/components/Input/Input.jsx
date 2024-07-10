import './Input.css';

function Input() {
  return (
    <>
      <label htmlFor="search" className='input'>
        <input type="search" className='input-search' placeholder='Введите название' />
        <img src="./icons/search.svg" alt="search" className='input-image' />
      </label>
    </>
  );
}

export default Input;