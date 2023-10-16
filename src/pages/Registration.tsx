import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSlice } from "../store/slices/authSlice";
import {IRegistr, IUser, IUserState} from "../models/models";

export function Registration() {
    const navigate = useNavigate();
    const [form, setForm] = useState<IRegistr>({
        username: "",
        password: "",
        re_password: ""
    });

    const isFormValid = () => {
        return form.password === form.re_password;
    };

    const registerUser = (user: IUser) => {
        const userState: IUserState = userSlice.getInitialState();
        var users = userState.users;
        const existingUser = users.find((u) => u.name === user.name);

        if (existingUser) {
            alert("Username already exists!");
            return;
        }

        const updatedUsers = [...users, user];
        userSlice.actions.setUsers(updatedUsers); // Update the users collection in the state
        navigate("/main");
    };

    const registerHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isFormValid()) {
            const newUser: IUser = {
                id: Date.now(),
                name: form.username,
                password: form.password,
            };

            registerUser(newUser);
        } else {
            alert("Passwords do not match!");
        }
    };

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <form
            className="container mx-auto pt-8 max-w-[500px]"
            onSubmit={registerHandler}
        >
            <h1 className="font-bold">Registration</h1>
            <div className="mb-2">
                <label htmlFor="username" className="block">
                    Username
                </label>
                <input
                    type="text"
                    defaultValue={"username"}
                    id="username"
                    name="username"
                    className="border py-1 px-2 w-full"
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="block">
                    Password
                </label>
                <input
                    type="password"
                    defaultValue={"password"}
                    id="password"
                    name="password"
                    className="border py-1 px-2 w-full"
                    onChange={changeHandler}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="repeat_password" className="block">
                    Repeat password
                </label>
                <input
                    type="password"
                    defaultValue={"password"}
                    id="repeat_password"
                    name="repeat_password"
                    className="border py-1 px-2 w-full"
                    onChange={changeHandler}
                />
            </div>
            <button className="py-2 px-4 bg-blue-700 border text-white" type="submit">
                Registration
            </button>
        </form>
    );
}