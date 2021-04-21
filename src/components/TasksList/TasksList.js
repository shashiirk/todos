import Task from '../Task/Task';
import styles from './TasksList.module.css';

const TasksList = (props) => {
  return (
    <ul className={styles.taskslist}>
      {props.items.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
