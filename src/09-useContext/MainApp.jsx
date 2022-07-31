import { Routes, Route } from "react-router-dom";
import { NavBar } from "../08-useReducer/NavBar";
import { UserProvider } from "./Context/UserProvider";
import { LoginPage, HomePage, AboutPage } from "./index";

export const MainApp = () => {
    return (
        <UserProvider>
            {/* <h1>Main App</h1> */}
            <NavBar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />

                {/* This works as a 404 Error Found*/}
                <Route path="/*" element={<LoginPage />} />
            </Routes>
        </UserProvider>
    )

}
