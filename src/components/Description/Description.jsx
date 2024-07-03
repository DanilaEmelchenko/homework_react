import './Description.css';

function Description({ text, fontSize }) {
  const sizeFont = {
    fontSize: fontSize
  };

  return (
    <p className='description' style={sizeFont}>{text}</p>
  );
}

export default Description;