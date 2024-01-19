import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

function App() {

  return (
    <>
      <h1>Task Manager</h1>
      <AddTask />
      <TaskList />
    </>
  )
}

export default App
