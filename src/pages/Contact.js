import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Gonesse</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0768924397">
                                <span className="clickInput" onClick={() => {
                                    alert('Copied to pressboard')
                                }}>07 68 92 43 97</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="augustindiabira@gmail.com">
                                <span className="clickInput" onClick={() => {
                                    alert('Copied to pressboard')
                                }}>augustindiabira@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div> 
                <div className="SocialNetwork">
                    <ul>

                        <a href="https://fr.linkedin.com/in/augustin-diabira-3331991a7 " target="_blank"
                        rel="noopener noreferrer" >
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/PurpDev" target="_blank"
                        rel="noopener noreferrer" >
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/callmebugs/ " target="_blank"
                        rel="noopener noreferrer" >
                            <h4>Instagram</h4>
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://twitter.com/devtaeyi " target="_blank"
                        rel="noopener noreferrer" >
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                    
                    </ul> 
                </div>
            </div>
        </div>
    );
};

export default Contact;