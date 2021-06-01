
import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Portfolio = () => {
    return (
        <div className="NotFound">

             <div className="NotFoundContent">
                <h3>
                  Le portfolio sera ajouté au site incessement sous peu...</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
             </div>
           </div>
    );
};



export default Portfolio;



