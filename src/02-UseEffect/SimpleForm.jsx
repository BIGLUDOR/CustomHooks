import { useEffect } from "react";
import { useState } from "react"
import { Messages } from "./Messages";


export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'bigludor',
        email: 'luis_149@live.com'
    });

    const {username, email } = formState

    const OnInputChange = ({ target }) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    //How to USE UseEffect
    // useEffect( () => {
    //     console.log('UseEffect Called');
    // }, []) 
    // useEffect( () => {
    //     console.log('useEffect Change')
    // }, [formState])
    // useEffect( () => {
    //     console.log('Email change')
    // }, [ email ])

  return (
    <>
        <h1>Formulario Simple</h1>
        <hr />

        <input type="text" 
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange= {OnInputChange}
            />
        <input type="email" 
            className="form-control mt-2"
            placeholder="xxxx@email.com"
            name="email"
            value={ email }
            onChange= {OnInputChange}
        />

        {
            (username === 'bigludor2') && <Messages />
        }
    </>
  )
}
