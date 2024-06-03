import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';

const oldTasks = localStorage.getItem('tasks');

const App = () => {
  const [tasks, setTasks] = useState(oldTasks ? JSON.parse(oldTasks) : []);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const handleEdit = (taskIndex, newTitle) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, task: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  const onDrop = (status, position) => {
    console.log(`${activeCard} est sur le point de d'être placé dans ${status} à la position ${position}.`);

    if (activeCard == null || activeCard == undefined) return;

    const taskToMove = tasks[activeCard];
    const updatedTasks = tasks.filter((task, index) => index !== activeCard);

    updatedTasks.splice(position, 0, {
      ...taskToMove,
      status: status
    });

    setTasks(updatedTasks);
  };

  return (
    <div className='app'>
      <TaskForm setTasks={setTasks} />
      <main className='app_main'>
        <TaskColumn 
          columnName="🎯 À Faire" 
          tasks={tasks} 
          status='todo' 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn 
          columnName="⭐ En Cours" 
          tasks={tasks} 
          status='doing' 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
        <TaskColumn 
          columnName="✅ Terminé" 
          tasks={tasks} 
          status='done' 
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </main>
    </div>
  );
}

export default App;
