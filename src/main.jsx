import React from 'react'
import ReactDOM from 'react-dom/client'
// import { FocusScreen } from './04-UseRef/FocusScreen'
// import { CounterWithCustomHook } from './01-UseState/CounterWithCustomHook'
// import { HoosApp } from './HoosApp'
// import { SimpleForm } from './02-UseEffect/SimpleForm'
// import { FormWithCustomHook } from './02-UseEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-Memos/Memorize'
// import { MemoHook } from './06-Memos/MemoHook'
// import { CallbackHook } from './06-Memos/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // // <React.StrictMode>
  <TodoApp />
  // // </React.StrictMode>
)
