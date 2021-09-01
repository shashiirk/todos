import Task from '../Task/Task';
import styles from './TasksList.module.css';

const TasksList = (props) => {
  return (
    <ul className={styles.taskslist}>
      {props.items.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          task={task}
          onDelete={props.onDeleteTask}
          onUpdateStatus={props.onUpdateTaskStatus}
          onUpdateTitle={props.onUpdateTaskTitle}
        />
      ))}
    </ul>
  );
};

export default TasksList;