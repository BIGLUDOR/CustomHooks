import { useEffect } from "react";
import { UseForm } from "../hooks/UseForm"


export const TodoAdd = ({ onNewTodo }) => {

    const {description, OnInputChange, onResetForm} = UseForm({
        description: ''
    });



    const OnFormatSubmit = ( event ) => {
        event.preventDefault();

        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }
        onNewTodo( newTodo )
        onResetForm();
    }

    

    return (
        <form onSubmit={ OnFormatSubmit }>
            <input
                type="text"
                placeholder='Que debo de hacer?'
                className='form-control'
                name="description"
                value={ description }
                onChange={ OnInputChange }
            />
            <button
                type='submit'
                className='btn btn-outline-primary mt-2'
            >Agregar</button>
        </form>
    )
}
