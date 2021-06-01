import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>
                        Augustin Diabira
                    </h1>
                    <h2>Apprenti Développeur front-end</h2>
                    <div className="pdf">
                        <a href="./moncv.pdf" target="_blank">Télécharger mon cv</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Home;