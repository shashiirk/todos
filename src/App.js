import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import TasksList from './components/TasksList/TasksList';
import './App.css';

const App = () => {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const localItems = JSON.parse(localStorage.getItem('tasks'));
    if (localItems) {
      setTasksList(localItems);
    }
  }, []);

  useEffect(() => {
    if (tasksList.length === 0) {
      localStorage.removeItem('tasks');
    } else {
      localStorage.setItem('tasks', JSON.stringify(tasksList));
    }
  }, [tasksList]);

  const addTaskHandler = (newTask) => {
    setTasksList((prevTasks) => {
      const updatedTasksList = [...prevTasks, newTask];
      return updatedTasksList;
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasksList((prevTasks) => {
      const updatedTasksList = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasksList;
    });
  };

  const updateTaskHandler = (taskId) => {
    setTasksList((prevTasks) => {
      const taskIndex = prevTasks.findIndex((task) => task.id === taskId);
      const existingTask = prevTasks[taskIndex];
      const updatedTask = {
        ...existingTask,
        status: !existingTask.status,
      };
      const updatedTasksList = [...prevTasks];
      updatedTasksList[taskIndex] = updatedTask;
      return updatedTasksList;
    });
  };

  return (
    <div className="outer-container">
      <Header />
      <div className="inner-container">
        <UserInput onAddTask={addTaskHandler} />
        <TasksList
          items={tasksList}
          onDeleteTask={deleteTaskHandler}
          onUpdateTask={updateTaskHandler}
        />
      </div>
    </div>
  );
};

export default App;
