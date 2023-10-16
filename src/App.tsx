import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {MainPage} from "./pages/MainPage";
import {Login} from "./pages/Login";
import {Registration} from "./pages/Registration";
import {Navigation} from "./components/Navigation";
import Template404 from "./pages/Template404";

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="*" element={<Template404 />} />
                <Route path="/main" element={<MainPage/>}/>
            </Routes>
        </>
    );
}

export default App
