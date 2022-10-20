import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout"
import Home from "../pages/Home";
import Logement from '../pages/Logement';
import APropos from "../pages/APropos";
import Erreur404 from "../pages/404";



function RoutesPath() {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/logement/:id" element={<Logement/>}/>
                    <Route path="/a-propos" element={<APropos/>}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesPath;