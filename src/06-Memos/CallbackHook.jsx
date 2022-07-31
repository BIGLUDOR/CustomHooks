import { useCallback } from "react"
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 )

    const incrementFather = useCallback(
      (value) => {
        //Se le pone value porque se memoriza el valor y se le suma uno
        setCounter( (c) => c + value);
      },
      [],
    )


    

    // const incrementFather = () => {
    //     setCounter( counter + 1 )
    // }

  return (
    <>
        <h1>
            UseCallBack Hook: {counter}
        </h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
