import React from 'react';
import Experience from '../components/knowledges/Experience';
import OtherSkills from '../components/knowledges/OtherSkills';
import Hobbies from '../components/knowledges/Hobbies';
import Langages from '../components/knowledges/Langages';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
               <Langages/>
               <Experience/>
               <OtherSkills/>
               <Hobbies/>
            </div>
        </div>
    );
};

export default Knowledges;