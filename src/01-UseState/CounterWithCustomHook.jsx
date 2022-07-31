import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const { counter, increment, reset, decrement } = useCounter()

  return (
    <>
        <h1>Counter Custom  { counter }</h1>

        <hr />
        <button className="btn btn-primrary" onClick={ () => increment(2) }>+1</button>
        <button className="btn btn-primrary" onClick={reset}>Reset</button>
        <button className="btn btn-primrary" onClick={ () => decrement(2) }>-1</button>
    </>
  )
}

