import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import { Form, Button, Container } from 'react-bootstrap';

function FormularioCadastro() {
  const aoEnviar = (dados) => console.log(dados);
  const [etapaAtual, setEtapaAtual] = useState(0);
  // const formularios = [
    //<DadosUsuario  />,
   // <DadosPessoais  />,
    //<DadosEntrega  />
  //]

  const apareceBotao = () => {
    if (etapaAtual > 2) {
      return null
    } else if (etapaAtual === 2) {
      return (
        <Container className="d-flex justify-content-center mt-3 mb-4">
          <Button
            onClick={aoEnviar}
            type='submit'
            className="button-style">
            Finalizar cadastro
          </Button>
        </Container>
      )
    } else {
      return (
        <Container className="d-flex justify-content-center mt-3 mb-4">
          <Button
            onClick={proximo}
            type='submit'
            className="button-style">
            Próximo
          </Button>
        </Container>
      )
    }
  }

  function proximo() {
    setEtapaAtual(etapaAtual => etapaAtual + 1);
  }

  return (
    <>
      <Form onSubmit={(event) => {
        event.preventDefault();
      }}>
        {etapaAtual === 0 && <DadosUsuario />}
        {etapaAtual === 1 && <DadosPessoais />}
        {etapaAtual === 2 && <DadosEntrega />}
        {etapaAtual === 3 && <h2 className = 'container d-flex align-items-center'>Parabéns, você se cadastrou!</h2>}
        {apareceBotao()}
      </Form>
    </>
  );
}
export default FormularioCadastro;