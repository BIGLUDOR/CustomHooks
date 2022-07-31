
import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer'


export const useTodo = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todo')) || [];
    }

    const [todo, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo) || [])

    }, [todo])

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Delete Todo',
            payload: id
        })
    }

    const onToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Edit Todo',
            payload: id
        })
    }


    return (
        {
            todo,
            todosCount: todo.length,
            pendingTodosCount: todo.filter(todo => !todo.done).length,
            handleNewTodo,
            handDeleteTodo,
            onToggleTodo,
        }
    )
}
