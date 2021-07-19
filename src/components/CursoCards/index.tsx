
import React from 'react';
import { Link } from 'react-router-dom';

import CursoCard from '../CursoCard';



import './Style.css'




function CursoCards() {






  return (
    <>

      <CursoCard
        foto="https://www.alura.com.br/assets/api/cursos/acessibilidade-web-front-end.svg"
        nome="ACESSIBILIDADE WEB PARTE 1: TORNANDO SEU FRONT-END INCLUSIVO"
        link="https://cursos.alura.com.br/certificate/07e9157c-7f4d-4434-93cc-12457fe5edb0"
        target="_blank"
      />

      <CursoCard
        foto="https://www.alura.com.br/assets/api/cursos/arquitetura-css.svg"
        nome="ARQUITETURA CSS: DESCOMPLICANDO OS PROBLEMAS"
        link="https://cursos.alura.com.br/certificate/3bd6752d-9ab5-49b4-bc25-a73a5e362a71"
        target="_blank"
      />

      <CursoCard
        foto="https://www.alura.com.br/assets/api/cursos/css-grid-layout.svg"
        nome="CSS GRID: SIMPLIFICANDO LAYOUTS"
        link="https://cursos.alura.com.br/certificate/bb1b4e60-92f6-4e0a-8dbf-9a43bd459a30"
        target="_blank"
      />

      <CursoCard
        foto="https://www.alura.com.br/assets/api/cursos/expressoes-regulares.svg"
        nome="EXPRESSÕES REGULARES: CAPTURANDO TEXTOS DE FORMA MÁGICA"
        link="https://cursos.alura.com.br/certificate/b27c67ce-3f8d-496b-adb8-470bd2fef6f9"
        target="_blank"
      />
      <Link to="/formacao2" className="outros-container" >
        <div className="linha"></div>
        <p>Mostrar outros 58 cursos</p>
        <div className="linha"></div>
      </Link>



    </>

  );
}

export default CursoCards