import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout"
import Home from "../pages/Home";
import Logement from '../pages/Logement';



function RoutesPath() {
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logement/:id" element={<Logement/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;