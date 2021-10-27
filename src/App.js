import React, { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Fragment>
    <h1 className="container d-flex align-items-center flex-column bd-highlight mt-2">Formulário de cadastro</h1>
    <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Fragment>
  )
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
