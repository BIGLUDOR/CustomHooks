import { useState } from 'react';
import {useCounter} from '../hooks'


export const MemoHook = () => {

    const [show, setshow] = useState(true)

    const {counter, increment } = useCounter(10);
  return (
    <>
        <h1>
            counter: <small>{ counter }</small>
        </h1>
        <hr />

        <button 
        className="btn btn-primary"
        onClick={() => increment()}
        >+1</button>

        <button
        className='btn btn-outline-primary'
        onClick={() => setshow( !show)}
        >
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}
