import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Signup} from "./Signup";
import {Login} from "./Login";
import {Home} from "./Home";

const Pages = () => {
    return (
        <div className='pages'>
            <BrowserRouter>
                <Routes>
                    <Route path='login' element={<Login />}/>
                    <Route path='signup' element={<Signup />}/>
                    <Route path='home' element={<Home />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export  default Pages;