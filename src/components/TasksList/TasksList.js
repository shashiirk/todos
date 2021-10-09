import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task';
import styles from './TasksList.module.css';

const TasksList = (props) => {
  return (
    <Droppable droppableId="droppable">
      {(provided) => (
        <ul
          className={styles.taskslist}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {props.items.map((task, index) => (
            <Task
              key={task.id}
              id={task.id}
              index={index}
              task={task}
              onDelete={props.onDeleteTask}
              onUpdateStatus={props.onUpdateTaskStatus}
              onUpdateTitle={props.onUpdateTaskTitle}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default TasksList;
