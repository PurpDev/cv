import React from 'react';

const Experience = () => {
    return (
      <div className="experience">
        <h3>Expériences</h3>
        <div className="exp-1">
            <h4>Développeur front-end stagiaire - Mama Africa Innovation 1901</h4>
            <h5>Mars 2021 - Avril 2021</h5>
            <p> 
            Développer le front-end d'un site en Javascript
            Travailler en collaboration avec le lead dev qui s'occupait du back-end. 

            Importer le code du site sur le cms wordpress pour faciliter la mise à jour du web-magazine pour le client.
           </p>

           <div className="exp-2">
               <h4>Stage d'observation cabinet pédiatrique</h4>
               <h5>Janvier 2017</h5>
               <p> 
                  Même si ce stage d'observation ne m'a apporté aucune compétences en informatique,
                  il m'a permis d'être plus organisé dans mon travail,
                  de bien répartir mes tâches dans le but de terminer on travail dans les délais impartis.
                    </p>
           </div>
        </div>
     </div>


    );
};

export default Experience;