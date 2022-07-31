import { useContext } from "react"
import { UserContext } from "./Context/UserContext";


export const LoginPage = () => {

    const { user, setuser } = useContext(UserContext);


    return (
        <>
            <h1>Login</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={ () => { setuser({ id:1234, name: 'Juanito', email: 'Juanit@gmail.com' })}}
            >
                Set User
            </button>

        </>
    )

}