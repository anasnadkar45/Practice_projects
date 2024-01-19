// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTaskCompletion } from '../Redux/slices/TaskSlice'

function Task({ task }) {
  const dispatch = useDispatch();

  const handleRemoveTask = () => {
    dispatch(removeTask(task.id));
  };

  const handleToggleTaskCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleTaskCompletion}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={handleRemoveTask}>Remove</button>
    </div>
  );
}

export default Task;
