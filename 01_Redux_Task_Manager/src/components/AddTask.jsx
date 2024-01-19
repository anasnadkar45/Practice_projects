import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTask } from '../Redux/slices/TaskSlice';

function AddTask() {
    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] =useState("");
    const handleAddTask = () => {
        if (taskTitle.trim() !== '') {
          dispatch(
            addTask({ id: Date.now(), title: taskTitle, completed: false })
          );
          setTaskTitle('');
        }
      };

  return (
    <div>
        <input 
        type="text" 
        placeholder='Enter A Task'
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value) }/>
        <button onClick={handleAddTask}>Add Task</button>
    </div>
  )
}

export default AddTask