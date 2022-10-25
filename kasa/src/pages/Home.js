import React from "react";
import "./Home.css";
import Banniere from "../components/Banniere/Banniere";
import banniereAccueil from "../assets/img/Pages/Home/Banniere.png";
import { NavLink } from "react-router-dom";
import Logements from "../components/Logements/Logements";
import ListeLogements from "../assets/api/logements.json";

function Home() {
    return(
        <div className="Home">
            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            <div className="liste-logements">
                {ListeLogements.map((logement) => <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}><Logements key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} /></NavLink>)}
            </div>
        </div>
    );
}

export default Home;

