import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import {ILoginData, ISignupData} from "../../interfaces";
import {useStore} from "../../stores";
import {useNavigate} from "react-router-dom";

export const Login: React.FC = observer(() => {
    const [values, setValues] = useState<ILoginData>({ username: '', password: '' })
    const {authStore} = useStore();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        console.log(values)
        e.preventDefault();
        authStore.login(values).then((success) => {
            console.log("This is Login")
            if (success) {
                console.log("Login sucessfully...................");
                navigate('/home');
            }
        });
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="">Enter username: </label>
                <input type="text" value={values.username}
                       onChange={(e) => setValues((prev) => ({...prev, username: e.target.value}))}/>
                <label htmlFor="">Enter password: </label>
                <input type="password" value={values.password}
                       onChange={(e) => setValues((prev) => ({...prev, password: e.target.value}))}/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
})