import styles from './Checkbox.module.css';

const Checkbox = (props) => {
  return (
    <>
      {!props.status && (
        <button onClick={props.onClick} className={styles.cbButton1}></button>
      )}
      {props.status && (
        <button onClick={props.onClick} className={styles.cbButton2}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-check"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Checkbox;
