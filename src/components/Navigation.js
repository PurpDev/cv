import React from 'react';
import photo from './moi.jpg'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src={photo} alt="profil-pic"/>
                    <h3>Augustin Diabira</h3>
                </div>    
            </div>

            <div className="navigation">
                <ul>
                 <li>
                    <NavLink exact to="/" activeClassName="navActive">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink exact to="/compétences" activeClassName="navActive">
                        <i className="fas fa-mountain"></i>
                        <span>compétences</span>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink exact to="/portfolio" activeClassName="navActive">
                        <i className="fas fa-images"></i>
                        <span className="Sorry" onClick={()=>{
                            alert('Le Portfolio est indisponible pour le moment, il sera ajouté incessement sous peu. Je vous présente mes excuses pour la gêne occasionnée')
                        }}>Portfolio</span>
                    </NavLink>
                 </li>
                 <li>
                    <NavLink exact to="/contact" activeClassName="navActive">
                        <i className="fas fa-address-book"></i>
                        <span>Contact</span>
                    </NavLink>
                 </li>
                </ul>
                
            </div>

            <div className="SocialNetwork">
                <ul>
                    <li>
                        <a href="https://fr.linkedin.com/in/augustin-diabira-3331991a7 " target="blank"
                        rel="noopener noreferrer" ><i className="fab fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="https://github.com/PurpDev" target="blank"
                        rel="noopener noreferrer" ><i className="fab fa-github"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/callmebugs/ " target="blank"
                        rel="noopener noreferrer" ><i className="fab fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/devtaeyi " target="blank"
                        rel="noopener noreferrer" ><i className="fab fa-twitter"></i></a>
                    </li>
                </ul>
                <div className="copyright">
                    <p>  by Augustin Diabira - 2021</p>
                </div>
                
            </div>
        </div>
    );
};

export default Navigation;