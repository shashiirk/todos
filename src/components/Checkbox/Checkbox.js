import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  return (
    <>
      {!props.status && (
        <button onClick={props.onClick} className={styles.cbButton1}></button>
      )}
      {props.status && (
        <button onClick={props.onClick} className={styles.cbButton2}>
          <i className="fas fa-check"></i>
        </button>
      )}
    </>
  );
};

export default Checkbox;
