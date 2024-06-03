import React, { useState } from 'react';
import './TaskCard.css';  
import Tag from './tag';

const TaskCard = ({ title, tags, handleDelete, index, setActiveCard, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskText, setTaskText] = useState(title);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const saveEdit = () => {
    handleEdit(index, taskText);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setTaskText(title);
    setIsEditing(false);
  };

  return (
    <article className='task_card' draggable 
             onDragStart={() => setActiveCard(index)} 
             onDragEnd={() => setActiveCard(null)}>
      {isEditing ? (
        <div className='task_edit'>
          <input 
            type='text' 
            value={taskText} 
            onChange={handleChange} 
            className='task_edit_input' 
          />
          <button onClick={saveEdit} className='task_edit_save'>Save</button>
          <button onClick={cancelEdit} className='task_edit_cancel'>Cancel</button>
        </div>
      ) : (
        <p className='task_text' onClick={toggleEdit}>{title}</p>
      )}

      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag, index) => (
            <Tag key={index} tagName={tag} selected={true} />
          ))}
        </div>
        <div className='task_delete' onClick={() => handleDelete(index)}>🗑️</div>
      </div>
    </article>
  );
}

export default TaskCard;
