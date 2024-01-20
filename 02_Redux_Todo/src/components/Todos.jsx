import React from 'react'
import { removeTodo } from '../Features/Todo/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

function Todos() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <div>{todo.text}</div>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>removeTodo</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todos