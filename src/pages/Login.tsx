import React, {ChangeEvent, FormEvent, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {IAuth, IUserState} from "../models/models";
import {userSlice} from "../store/slices/authSlice";

export function Login() {
    const navigate = useNavigate()
    const [form, setForm] = useState<IAuth>({
        username: '',
        password: ''
    })

    const isFormValid = () => {
        return true;
    }

    const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("submitHandler+", event)

        if (isFormValid()) {
            const enteredUsername = event.currentTarget.username.value;
            const enteredPassword = event.currentTarget.password.value;

            const userState: IUserState = userSlice.getInitialState(); // Access the user state
            const users = userState.users; // Access the users array

            const matchedUser = users.find(user => user.name === enteredUsername && user.password === enteredPassword);

            // await dispatch(register(form))
            if (matchedUser) {
                // User login successful
                navigate('/main');
            } else {
                alert('Invalid username or password');
                navigate('/registration');
            }
        } else {
            alert('Form is invalid!');
        }
    }

    // const loginHandler = async (event: MouseEvent<HTMLButtonElement>) => {
    //     event.preventDefault()
    //     if (isFormValid()) {
    //         console.log(login)
    //         // await dispatch(login(form))
    //         navigate('/main')
    //     } else {
    //         alert('Form is invalid!')
    //     }
    // }
    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setForm(prev => ({...prev, [event.target.name]: event.target.value}))
    }


    return (
        <form
            className="container mx-auto pt-8 max-w-[500px]"
            onSubmit={loginHandler}
        >
            <h1 className="font-bold">Login</h1>
            <div className="mb-2">
                <label htmlFor="username" className="block">Username</label>
                <input
                    type="text"
                    defaultValue={"username"}
                    id="username"
                    className="border py-1 px-2 w-full"
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="block">Password</label>
                <input
                    type="password"
                    // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/"
                    defaultValue={"password"}
                    id="password"
                    className="border py-1 px-2 w-full"
                    onChange={changeHandler}
                />
            </div>
            <button
                className="py-2 px-4 bg-blue-700 border text-white"
                type="submit"
            >
                Submit
            </button>
        </form>
    )
}

