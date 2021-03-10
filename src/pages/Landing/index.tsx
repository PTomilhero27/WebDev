import React from 'react';

import landingImg from '../../assets/img/landing.svg';
import studyIcon from '../../assets/img/icons/study.svg';
import giveWorkIcon from '../../assets/img/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/img/icons/purple-heart.svg';
import { Link } from 'react-router-dom';


import './Style.css';




function Landing() {
  return (
    <div id="page-home">


      <div id="page-home-content" className="container">



        <div className="logo-container">
          <h1>Pedro Teixeira Tomilhero</h1>
          <h2>Um programador não por formação mas por vocação!</h2>
        </div>

        <img src={landingImg} alt="Imagem Landing" className="hero-image" />





        <div className="buttons-container">
          <Link to="/formacao" className="work">
            <img src={studyIcon} alt="trabalhar" />
                        Formação
                    </Link>
          <Link to="/projetos" className="give-work">
            <img src={giveWorkIcon} alt="trabalhar" />
                        Projetos
                    </Link>
        </div>
        <span className="total-connections">
        Faça da sua vida mais "Responsivo" <img src={purpleHeartIcon} alt="Purple Heart Icon" />
        </span>
      </div>
    </div>
  );
}

export default Landing;