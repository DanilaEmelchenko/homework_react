import './Description.css';

function Description({ text, fontSize }) {
  return (
    <p className='description' style={{ fontSize: fontSize }}>{text}</p>
  );
}

export default Description;