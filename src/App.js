import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import TasksList from './components/TasksList/TasksList';
import Footer from './components/Footer/Footer';
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

  const updateTaskStatusHandler = (taskId) => {
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

  const updateTaskTitleHandler = (taskId, taskTitle) => {
    setTasksList((prevTasks) => {
      const taskIndex = prevTasks.findIndex((task) => task.id === taskId);
      const existingTask = prevTasks[taskIndex];
      const updatedTask = {
        ...existingTask,
        title: taskTitle,
      };
      const updatedTasksList = [...prevTasks];
      updatedTasksList[taskIndex] = updatedTask;
      return updatedTasksList;
    });
  };

  const dragEndHandler = (result) => {
    if (result.destination) {
      const items = Array.from(tasksList);
      const [item] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, item);

      setTasksList(items);
    }
  };

  return (
    <>
      <div className="outer-container">
        <div className="main-container">
          <Header />
          <UserInput onAddTask={addTaskHandler} />
        </div>
        <div className="inner-container">
          <DragDropContext onDragEnd={dragEndHandler}>
            <TasksList
              items={tasksList}
              onDeleteTask={deleteTaskHandler}
              onUpdateTaskStatus={updateTaskStatusHandler}
              onUpdateTaskTitle={updateTaskTitleHandler}
            />
          </DragDropContext>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
