import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="NotFound">
            <div className="NotFoundContent">
                <h3>
                    404 ERROR !</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                    <span> Accueil</span>
                </NavLink>
            </div>
            
        </div>
    );
};

export default NotFound;