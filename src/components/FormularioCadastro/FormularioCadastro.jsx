import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Form } from 'react-bootstrap';

function FormularioCadastro() {
  
  const [etapaAtual, setEtapaAtual] = useState(0);
  // const formularios = [
    //<DadosUsuario  />,
   // <DadosPessoais  />,
    //<DadosEntrega  />
  //]


  function proximo() {
    setEtapaAtual(etapaAtual => etapaAtual + 1);
  }

  return (
    <>
      <Form onSubmit={(event) => {
        event.preventDefault();
        proximo();
      }}>
        {etapaAtual === 0 && <DadosUsuario />}
        {etapaAtual === 1 && <DadosPessoais />}
        {etapaAtual === 2 && <DadosEntrega />}
        {etapaAtual === 3 && <h2 className = 'container d-flex align-items-center'>Parabéns, você se cadastrou!</h2>}
      </Form>
    </>
  );
}
export default FormularioCadastro;