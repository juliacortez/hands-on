import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import HomePage from '../Screens/HomePage/HomePage';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';

const MainRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
    )
}

export default MainRoutes