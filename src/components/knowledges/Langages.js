import React, { Component } from 'react';
import ProgressBar from './ProgressBar'

class Langages extends Component {
    state = {
        langages : [
            {id: 1 , value:'Javascript', xp:1.1},
            {id: 2, value:'PHP', xp:0.7},
            {id: 3, value:'Python', xp:1},
            {id: 4, value:'Java', xp:0.3}
        ],
        frameworks : [
            {id: 1, value:"React", xp:0.9},
            {id: 2, value:"Bootstrap", xp:1},
            {id: 2, value:"Django", xp:0.2},
            {id: 2, value:"Sass", xp:1}
        ],
    }
    render() {
        let {langages, frameworks} = this.state;

        return (
            <div>
                <div className="langagesFrameworks">
                    <ProgressBar
                      langages={langages}
                      className="langagesDisplay"
                      title="langages"
                    />
                    <ProgressBar
                    langages={frameworks}
                    title="frameworks & librairies"
                    className="frameworksDisplay"
                    />
                </div>
            </div>
        );
    }
}

export default Langages;
