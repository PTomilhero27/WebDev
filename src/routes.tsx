import { BrowserRouter, Route } from 'react-router-dom';


// Telas do login

import Landing from './pages/Landing';

import Formacao from './pages/formacao';
import Formacao2 from './pages/FormaçãoCompleta';

import Projetos from './pages/projetos';



function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing} exact />

            <Route path="/formacao" component={Formacao}/>
            <Route path="/formacao2" component={Formacao2}/>

            <Route path="/projetos" component={Projetos}/>




        </BrowserRouter>
    )
}

export default Routes;