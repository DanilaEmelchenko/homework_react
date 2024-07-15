import './App.css';

import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Description from './components/Description/Description';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Card from './components/Card/Card';

function App() {
  return (
    <>
      <Header />
      <Heading text='Поиск' />
      <Description
        fontSize='16px'
        text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
      />
      <Input />
      <Button text='Искать' />
      <Card />
    </>
  );
}

export default App;
