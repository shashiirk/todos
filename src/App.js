import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import TasksList from './components/TasksList/TasksList';
import './App.css';

const App = () => {
  const [tasksList, setTasksList] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  const addTaskHandler = (newTask) => {
    setTasksList((prevTasks) => {
      const updatedTasksList = [...prevTasks, newTask];
      updateLocalStorage(updatedTasksList);
      return updatedTasksList;
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasksList((prevTasks) => {
      const updatedTasksList = prevTasks.filter((task) => task.id !== taskId);
      updateLocalStorage(updatedTasksList);
      return updatedTasksList;
    });
  };

  const updateTaskHandler = (taskId) => {
    setTasksList((prevTasks) => {
      const taskIndex = prevTasks.findIndex((task) => task.id === taskId);
      prevTasks[taskIndex].status = !prevTasks[taskIndex].status;
      updateLocalStorage(prevTasks);
      return prevTasks;
    });
  };

  const updateLocalStorage = (newTasksList) => {
    if (newTasksList.length === 0) {
      localStorage.removeItem('tasks');
    } else {
      localStorage.setItem('tasks', JSON.stringify(newTasksList));
    }
  };

  return (
    <div className="container">
      <UserInput onAddTask={addTaskHandler} />
      <TasksList
        items={tasksList}
        onDeleteTask={deleteTaskHandler}
        onUpdateTask={updateTaskHandler}
      />
    </div>
  );
};

export default App;
