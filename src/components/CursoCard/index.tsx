import React, { AnchorHTMLAttributes } from 'react';

import certificadoIcon from '../../assets/img/icons/certificado.svg';

import './Style.css'

interface FormacaoCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  nome: string,
  foto: string,
  link: string,
  ids?: string;
}

const CursoCard: React.FC<FormacaoCardProps> = ({ nome, link, foto, ids ,...rest }) => {
  return (

    <div className="card-curso" id={ids}>

      <div className="curso-body">

        <img src={foto} alt="logo do curso " />
        <p>{nome}</p>
      </div>

      <a href={link} {...rest} className="curso-footer">
        <p>Certificado</p>
        <img src={certificadoIcon} alt="certificado" />
      </a>

    </div>
  );
}

export default CursoCard