import {observer} from "mobx-react-lite";
import React, {useState} from "react";
import {ISignupData} from "../../interfaces";
import {useStore} from "../../stores";
import {useNavigate} from "react-router-dom";

export const Signup: React.FC = observer(() => {
    const [values, setValues] = useState<ISignupData>({ username: '', password: '' })
    const {authStore} = useStore();
    const navigate = useNavigate()
    const handleSignup = (e) => {
        e.preventDefault();

        authStore.signup(values).then((success) => {
            console.log("This is Signup")
            if (success) {
                console.log("Signup successfull...........");
                navigate('/home');
            }
        });
    }
    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSignup}>
                <label htmlFor="">Enter username: </label>
                <input type="username" value={values.username} onChange={(e) => setValues((prev) => ({...prev, username: e.target.value}))}/>
                <label htmlFor="">Enter password: </label>
                <input type="password" value={values.password} onChange={(e) => setValues((prev) => ({...prev,password: e.target.value})) }/>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
})