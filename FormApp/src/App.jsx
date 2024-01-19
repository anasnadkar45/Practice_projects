import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  function changeHandler(event) {
    setForm(prevState => {
      return {
        ...prevState,
        [event.target.name] : event.target.value
      }

    })
  }

  console.log(form)

  return (
    <>
      <div>
        <input type="text"
          placeholder='Firstname'
          name='firstname'
          onChange={changeHandler} />
          <br /><br />

        <input type="text"
          placeholder='Lastname'
          name='lastname'
          onChange={changeHandler} />
          <br /><br />

        <input type="text"
          placeholder='email'
          name='email'
          onChange={changeHandler} />
      </div>
    </>
  )
}

export default App
