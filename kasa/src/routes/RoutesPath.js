import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout"
import Home from "../pages/Home";
import Logement from '../pages/Logement';
import APropos from "../pages/APropos";



function RoutesPath() {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logement/:id" element={<Logement/>}/>
                    <Route path="/a-propos" element={<APropos/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;