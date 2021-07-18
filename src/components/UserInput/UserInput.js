import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './UserInput.module.css';

const UserInput = (props) => {
  const [userInput, setUserInput] = useState('');

  const submitTaskHandler = (ev) => {
    ev.preventDefault();

    if (userInput.trim().length === 0) {
      return;
    } else {
      props.onAddTask({
        id: nanoid(10),
        title: userInput.trim(),
        status: false,
      });
      setUserInput('');
    }
  };

  const userInputHandler = (ev) => {
    setUserInput(ev.target.value);
  };

  return (
    <form className={styles.form} onSubmit={submitTaskHandler}>
      <div className={styles.inputBox}>
        <input
          type="text"
          placeholder="Add a task"
          onChange={userInputHandler}
          value={userInput}
        />
        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-plus"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default UserInput;
