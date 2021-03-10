import React, {AnchorHTMLAttributes} from 'react';

import certificadoIcon from '../../assets/img/icons/certificado.svg';

import './Style.css'

interface FormacaoCardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    nome: string,
    link: string,
}

const FormacaoCard: React.FC<FormacaoCardProps> = ({nome, link, ...rest}) => {
    return (
        
        <div className="formacao-card">

          <div className="card-nome">
            <p> {nome}</p>
            <span>...</span>
          </div>

          <div className="card-body">
            <h1> {`</>`} </h1>
          </div>

          <a href={link} {...rest} className="card-footer">
            <p>Certificado</p>
            <img src={certificadoIcon} alt=""/>
          </a>
          
        </div>
    );
}

export default FormacaoCard