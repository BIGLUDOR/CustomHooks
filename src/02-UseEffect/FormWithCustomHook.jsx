import { UseForm } from "../hooks/UseForm";


export const FormWithCustomHook = () => {

    const {formState, OnInputChange, onResetForm, username, mail, password} = UseForm({
        username:'',
        mail:'',
        password:''
    });

    // const { username, mail, password } = formState;

  return (
    <>
        <h1>Formulario With CustomHook</h1>
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
            name="mail"
            value={ mail }
            onChange= {OnInputChange}
        />
        <input type="password" 
            className="form-control mt-2"
            placeholder="Contrasena"
            name="password"
            value={ password }
            onChange= {OnInputChange}
        />
        <button onClick={ onResetForm} className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}
