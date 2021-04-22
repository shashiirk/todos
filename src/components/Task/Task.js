import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Task.module.css';

const Task = (props) => {
  const [status, setStatus] = useState(props.task.status);

  const updateStatusHandler = () => {
    setStatus((prevState) => !prevState);
    props.onUpdate(props.id);
  };

  return (
    <li className={`${styles.task} ${status ? styles.checked : ''}`}>
      <Checkbox status={status} onClick={updateStatusHandler} />
      <p>{props.task.title}</p>
      <button
        className={styles.delete}
        onClick={() => props.onDelete(props.id)}
      >
        &#10006;
      </button>
    </li>
  );
};

export default Task;
