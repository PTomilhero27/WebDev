/* eslint-disable no-script-url */
import React from 'react';

import resolvidoIcon from '../../assets/img/icons/resolvido.svg';
import cursoIcon from '../../assets/img/icons/cursos.svg';
import horasIcon from '../../assets/img/icons/horas.svg';
import backIcon from '../../assets/img/icons/back.svg';

import CursoCards from '../../components/CursoCards';
import FormacaoCard from '../../components/FormacaoCard';
import { Link } from 'react-router-dom';


import './Style.css';




function Formacao() {


  return (
    <div id="formacao-container">

      <header>
        <Link to="/"><img src={backIcon} className="back" alt="" /></Link>
        <ul>

          <li>
            <img src={cursoIcon} alt="Icone Resolvido" />
            <strong>62</strong>
            <span>cursos concluídos</span>
          </li>
          <li>
            <img src={resolvidoIcon} alt="Icone Resolvido" />
            <strong>1456</strong>
            <span>exercícios resolvidos</span>
          </li>
          <li>
            <img src={horasIcon} alt="Icone Resolvido" />
            <strong>600 h</strong>
            <span>Horas concluídas</span>
          </li>
        </ul>


      </header>
      <div id="content">

        <main >
          <div id="formacao-content">

            <h2>Formações comcluida</h2> 

            <div className="cards">
              <FormacaoCard
                nome="Iniciante em programação"
                link="https://cursos.alura.com.br/degree/certificate/de547967-8ef7-4632-8ba7-6d670ee23491"
                target="_blank"
              />
              <FormacaoCard
                nome="Front-End"
                link="https://cursos.alura.com.br/degree/certificate/44d760c4-38af-4e24-8290-95dbfafe995e"
                target="_blank"
              />
              <FormacaoCard
                nome="React.js"
                link="https://cursos.alura.com.br/degree/certificate/cce5e21e-5b72-4c56-9095-6277644ddce0"
                target="_blank"
              />
            </div>
          </div>

          <div id="cursos-content">
            <h2>Cursos Comcluidos
            </h2>




              <CursoCards />
        


          </div>
        </main>
      </div>



    </div>
  );
}

export default Formacao;