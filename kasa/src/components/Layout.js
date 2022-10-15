import React from "react";
import "./Layout.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Layout({children}) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;