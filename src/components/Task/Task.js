import { useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Task.module.css';

const Task = (props) => {
  const [status, setStatus] = useState(props.task.status);
  const [taskTitle, setTaskTitle] = useState(props.task.title);
  const textareaRef = useRef();

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }, []);

  const updateStatusHandler = () => {
    setStatus((prevState) => !prevState);
    props.onUpdateStatus(props.id);
  };

  const textareaHandler = (ev) => {
    textareaRef.current.style.height = '0px';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    setTaskTitle(ev.target.value);
  };

  const submitTaskHandler = () => {
    if (taskTitle.trim() === '') {
      props.onDelete(props.id);
    } else {
      props.onUpdateTitle(props.id, taskTitle);
    }
  };

  return (
    <li className={`${styles.task} ${status ? styles.checked : ''}`}>
      <Checkbox status={status} onClick={updateStatusHandler} />
      <textarea
        ref={textareaRef}
        onChange={textareaHandler}
        onBlur={submitTaskHandler}
        value={taskTitle}
        {...(status ? { disabled: true } : {})}
      />
      <button
        className={styles.delete}
        onClick={() => props.onDelete(props.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-trash"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </button>
    </li>
  );
};

export default Task;
