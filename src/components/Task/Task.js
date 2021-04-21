import Checkbox from '../Checkbox/Checkbox';
import styles from './Task.module.css';

const Task = (props) => {
  return (
    <li className={styles.task}>
      <Checkbox />
      {props.task.title}
    </li>
  );
};

export default Task;
