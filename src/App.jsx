import './App.css';
import Button from './components/Button/Button';
import Heading from './components/Heading/Heading';
import Description from './components/Description/Description';

function App() {
	return (
		<>
			<Heading text='Поиск' />
			<Description
				fontSize= '16px'
				text='Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
			/>
			<Button text='Войти в профиль' />
		</>
	);
}

export default App;
