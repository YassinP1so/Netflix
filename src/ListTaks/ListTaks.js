import React from 'react';
import Task from '../components/Task/Task';
import './ListTaks.css';

const ListTask = ({tasks,inputSearch}) => {
  return (
    <div className='movie-card'>
      {tasks.filter(task => task.name.toLowerCase().includes(inputSearch.toLowerCase()))
        .map(task => <Task task= {task} key={task.id}/>)}
      {tasks.filter(task => task.rate.toLowerCase().includes(inputSearch.toLowerCase()))
        .map(task => <Task task= {task} key={task.id}/>)}

    </div>
  );
}

export default ListTask;