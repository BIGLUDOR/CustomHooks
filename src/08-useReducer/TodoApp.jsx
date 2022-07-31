import React, { useEffect } from 'react'

import { TodoList, TodoAdd} from './index'
import { useTodo } from '../hooks';

export const TodoApp = () => {

    const { todo, todosCount, pendingTodosCount, handleNewTodo, handDeleteTodo, onToggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp {todosCount}, <small>Pendientes: { pendingTodosCount} </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                    todos={todo}
                    onDeleteTodo={ handDeleteTodo }
                    onToggleTodo={ onToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo} />
                </div>
            </div>

        </>
    )
}
