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
        <button type="submit">+</button>
      </div>
    </form>
  );
};

export default UserInput;
