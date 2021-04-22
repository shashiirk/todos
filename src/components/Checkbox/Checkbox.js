import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${styles.cbButton} ${props.status ? styles.checked : ''}`}
    ></button>
  );
};

export default Checkbox;
