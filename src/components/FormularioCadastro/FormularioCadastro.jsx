import React, { useState, useEffect }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

function FormularioCadastro({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(()=>{
        if(etapaAtual === formularios.length-1){
          aoEnviar(dadosColetados);
        }
      })

    const formularios = [
        <DadosUsuario aoEnviar = {coletarDados}/>,
        <DadosPessoais aoEnviar = {coletarDados}/>,
        <DadosEntrega aoEnviar = {coletarDados}/>
    ]

    function coletarDados(data){
        setDados({...dadosColetados, ...data});
        proximo();
      }

    function proximo () {
        setEtapaAtual(etapaAtual+1);
    }

    return (
      <>
      {formularios[etapaAtual]}
      </>
    );
}
export default FormularioCadastro;