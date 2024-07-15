import styles from './Description.module.css';

function Description({ text, fontSize }) {
  const sizeFont = {
    fontSize: fontSize
  };

  return (
    <p className={styles['description']} style={sizeFont}>{text}</p>
  );
}

export default Description;