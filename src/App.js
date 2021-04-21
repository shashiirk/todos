import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import TasksList from './components/TasksList/TasksList';
import './App.css';

const App = () => {
  const [tasksList, setTasksList] = useState([
    {
      title: 'Learn React',
      status: 0,
    },
    {
      title: 'Talk to Aishwarya',
      status: 0,
    },
  ]);

  const addTaskHandler = (newTask) => {
    setTasksList((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="container">
      <UserInput onAddTask={addTaskHandler} />
      <TasksList items={tasksList} />
    </div>
  );
};

export default App;
