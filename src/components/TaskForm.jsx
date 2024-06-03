import React, { useState } from 'react'

import './TaskForm.css'
import Tag from './tag'

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
  }

  const selectTag = (tag) => {
    if (taskData.tags.some(item => item === tag)) {
      const filterTags = taskData.tags.filter(item => item !== tag);
      setTaskData(prev => {
        return {...prev, tags: filterTags}
      })
    } else {
      setTaskData(prev => {
        return {...prev, tags: [...prev.tags, tag]}
      })
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setTaskData(prev => {
      return {...prev, [name]: value}
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks(prev => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  }


  return (
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' value={taskData.task} className='task_input' placeholder='Entrez une Tâche' onChange={handleChange}/>

            <div className='task_form_bottom_line'>
            <div>
            <Tag tagName='HTML' selectTag={selectTag} selected={checkTag("HTML")}/>
            <Tag tagName='CSS' selectTag={selectTag} selected={checkTag("CSS")}/>
            <Tag tagName='Javascript' selectTag={selectTag} selected={checkTag("Javascript")}/>
            <Tag tagName='PHP' selectTag={selectTag} selected={checkTag("PHP")}/>
            <Tag tagName='React' selectTag={selectTag} selected={checkTag("React")}/>
            <Tag tagName='SQL' selectTag={selectTag} selected={checkTag("SQL")}/>
            </div>

            <div>
            <select name="status" value={taskData.status} className="task_status" onChange={handleChange}>
                <option value="todo">À Faire</option>
                <option value="doing">En Cours</option>
                <option value="done">Terminé</option>
            </select>
            <button type='submit' className='task_submit'> + Ajouter une Tâche</button>
            </div>
        </div>
        </form>
    </header>
  )
}

export default TaskForm