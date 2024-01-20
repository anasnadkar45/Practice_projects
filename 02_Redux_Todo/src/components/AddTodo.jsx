import React, { useState } from 'react'
import { addTodo} from '../Features/Todo/todoSlice'
import {  useDispatch } from 'react-redux'

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch()
    console.log(input)

    const todoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <div>
            <form action="" onSubmit={todoHandler}>
                <input
                    type="text"
                    placeholder='Enter Todo'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTodo