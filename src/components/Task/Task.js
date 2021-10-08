import { useEffect, useRef, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import styles from './Task.module.css';

const Task = (props) => {
  const [status, setStatus] = useState(props.task.status);
  const [taskTitle, setTaskTitle] = useState(props.task.title);
  const [textareaFocus, setTextareaFocus] = useState(false);
  const textareaRef = useRef();

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
  }, []);

  useEffect(() => {
    if (textareaFocus) {
      const text = textareaRef.current.value;

      textareaRef.current.focus();
      textareaRef.current.value = '';
      textareaRef.current.value = text;
    }
  }, [textareaFocus]);

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
      setTextareaFocus(false);
      props.onUpdateTitle(props.id, taskTitle);
    }
  };

  const enterPressHandler = (ev) => {
    if (ev.keyCode === 13 && ev.shiftKey === false) {
      submitTaskHandler();
    }
  };

  const focusTextareaHandler = () => {
    if (!status) {
      setTextareaFocus(true);
    }
  };

  return (
    <li className={`${styles.task} ${status ? styles.checked : ''}`}>
      <Checkbox status={status} onClick={updateStatusHandler} />
      <textarea
        ref={textareaRef}
        onChange={textareaHandler}
        onBlur={submitTaskHandler}
        onKeyDown={enterPressHandler}
        value={taskTitle}
        {...(textareaFocus ? {} : { disabled: true })}
      />
      <button className={styles.edit} onClick={focusTextareaHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-pencil"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
        </svg>
      </button>
      <button
        className={styles.delete}
        onClick={() => props.onDelete(props.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
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
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </li>
  );
};

export default Task;
