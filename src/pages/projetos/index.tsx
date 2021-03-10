/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import Quiz from '../../assets/img/projetos/quiz.svg';
import Ijob from '../../assets/img/projetos/ijob.svg';
import MoveIt from '../../assets/img/projetos/move-it.svg';
import Resista from '../../assets/img/projetos/resista.svg';
import Back from '../../assets/img/icons/back.svg'


import Facebook from '../../assets/img/icons/facebook.svg';
import Instagram from '../../assets/img/icons/instagram.svg';
import Linkdin from '../../assets/img/icons/linkedin.svg';
import Github from '../../assets/img/icons/github.svg';






import './Style.css'
import { Link } from 'react-router-dom';


function Projetos() {
    return (
        <div id="projetos-container">
            <div id="projetos-content">
                <div className="projetos-card">
                    <img src={Quiz} alt="Projeto Quiz" />
                    <a href="https://movie-quiz-nine.vercel.app/"><h2>TomiQuiz</h2> </a>
                    <p>TomiQuiz foi um jogo criado com react-native,
                    next e Typescript, criado juntamente ao curso da alura
                    Imersão react, nesse jogo foi aplicado diversos conceitos
                    inovadores que o next trás, o jogo tem 10 questões sobre filmes
                    de diversos generos
                </p>
                </div>

                <div className="projetos-card">
                    <img src={Ijob} alt="Projeto Ijob" />
                    <a href="https://ijob-ptomilhero27.vercel.app/">
                        <h2>Ijob</h2>
                    </a>
                    <p>Ijob é um site criado com react-native,
                    e Typescript, criado para resolver um problema
                    das pessoas que moram nos Estados Unidos em questão
                    de trabalhos/bicos nesse site foi aplicado diversos conceitos
                    inovadores, como useState, useContext e diversas outros conceitos
                </p>
                </div>

                <div className="projetos-card">
                    <img src={MoveIt} alt="Projeto Ijob" />
                    <a href="https://ijob-ptomilhero27.vercel.app/">
                        <h2>Movi-It</h2>
                    </a>
                    <p>Ijob é um site criado com react-native,
                    e Typescript, criado para resolver um problema
                    das pessoas que moram nos Estados Unidos em questão
                    de trabalhos/bicos nesse site foi aplicado diversos conceitos
                    inovadores, como useState, useContext e diversas outros conceitos
                </p>
                </div>

                <div className="projetos-card">
                    <img src={Resista} alt="Projeto Ijob" />
                    <a href="https://ijob-ptomilhero27.vercel.app/">
                        <h2>resista</h2>
                    </a>
                    <p>Resista.jus é um site/ONG criado para resolver um problema da
                    população que é a injustiça do mundo, a ONG é nada mais
                    que trazer a facilidade de acesso das pessoas da periferia
                    com advogados com os problemas que afrigem a população como
                    violência contra mulher, crimes de racismo, violência policial
                    e crimes ambientais

                </p>
                </div>
            </div>


		<footer className="footer-distributed">
 
		<div className="footer-left">
 
		<h3>WebDev<span>Tomilhero</span></h3>
 
        <Link to="/"><img src={Back} alt="Voltar"/> </Link>
 
		<p className="footer-company-name">webdevtomilhero &copy; 2020</p>
		</div>
 
		<div className="footer-center">
 
		<div>
		<i className="fa fa-map-marker"></i>
		<p>São Paulo</p>
		</div>
 
		<div>
		<i className="fa fa-phone"></i>
		<p>+55 (11) 94178-0315</p>
		</div>
 
		<div>
		<i className="fa fa-envelope"></i>
		<p><a href="mailto:ptomilhero27@gmail.com">PTomilhero27@gmail.com</a></p>
		</div>
 
		</div>
 
		<div className="footer-right">
 
		<p className="footer-company-about">
		<span>Sobre</span>
            Meu nome é pedro tenho 19 anos, programador front-end
            porem sempre buscando conhecimentos para se tornar um
            programador full stack, entusiasta de projetos inovadores.
		</p>
 
		<div className="footer-icons">
 
		<a target="_Blank" href="https://www.facebook.com/profile.php?id=100004965697418">
            <img src={Facebook} alt="Icone facebook"/>
        </a>
		<a target="_Blank" href="https://www.instagram.com/tomilhero27/">
            <img src={Instagram} alt="Icone Instagram"/>
        </a>
		<a target="_Blank" href="https://www.linkedin.com/in/pedro-tomilhero-2696981b5/">
            <img src={Linkdin} alt="Icone Linkdin"/>
        </a>
		<a target="_Blank" href="https://github.com/PTomilhero27">
            <img src={Github} alt="Icone gitHub"/>
        </a>
 
		</div>
 
		</div>
 
		</footer>
        </div>
    );
}

export default Projetos;