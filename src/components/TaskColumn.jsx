import React from 'react';
import './TaskColumn.css';
import TaskCard from './TaskCard.jsx';
import DropArea from './DropArea.jsx';

const TaskColumn = ({ columnName, tasks, status, handleDelete, handleEdit, setActiveCard, onDrop }) => {
  return (
    <section className='task_column'>
      <h2>{columnName}</h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.filter(task => task.status === status).map((task, index) => (
        <React.Fragment key={index}>
          <TaskCard
            title={task.task} 
            tags={task.tags} 
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            index={index}
            setActiveCard={setActiveCard}
          />
          <DropArea onDrop={() => onDrop(status, index + 1)} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default TaskColumn;
