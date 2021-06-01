import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fad fa-violin"></i>
                    <span>Crypto-monnaies</span>
                </li>
                <li className="hobby">
                    <i className="fad fa-violin"></i>
                    <span>Course à pied/vélo</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-violon"></i>
                    <span>Mangas</span>
                </li>

                <li className="hobby">
                    <i className="fas fa-violin"></i>
                    <span>Violon</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;