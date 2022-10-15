import React from "react";
import "./Logements.css";

function Logements({id, image, titre}) {
    return(
        <div className="Logements" id={id}>
            <img className="Logements-image" src={image} alt="Logements du site"/>
            <div className="Logements-sombre"></div>
            <span className="Logements-titre">{titre}</span>
        </div>
    );
}

export default Logements;