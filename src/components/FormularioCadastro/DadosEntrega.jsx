import React from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';

function DadosEntrega () {
    const { getValues, register, handleSubmit, formState: { errors } } = useForm({mode: 'all'});
    
    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    const initialValues = {
        cep: '',
        endereço: '',
        estado: '',
        telefone: '',
        cidade: '',
    };
    
    return(
        <div className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <section className="d-flex align-items-center flex-column">
            <Form.Group className="mb-3 col-sm-6">
                <Form.Label>CEP *</Form.Label>
                <Form.Control
                    defaultValue={initialValues.cep}
                    {...register('cep', { validate: (value) => value.length > 0 })}
                    type="number"
                    placeholder="Seu CEP" />
                {errors.cep && <p id='mensagemErro'>O campo está vazio</p>}
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6">
                <Form.Label>Endereço *</Form.Label>
                <Form.Control
                    defaultValue={initialValues.endereço}
                    {...register('endereço', { validate: (value) => value.length > 0 })}
                    type="text"
                    placeholder="Seu endereço" />
                {errors.endereço && <p id='mensagemErro'>O campo está vazio</p>}
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6">
                <Form.Label>Estado *</Form.Label>
                <Form.Control
                    defaultValue={initialValues.estado}
                    {...register('estado', { validate: (value) => value.length > 0 })}
                    type="text"
                    placeholder="Seu estado" />
                {errors.estado && <p id='mensagemErro'>O campo está vazio</p>}
            </Form.Group>

            <Form.Group className="mb-3 col-sm-6">
                <Form.Label>Cidade *</Form.Label>
                <Form.Control
                    defaultValue={initialValues.cidade}
                    {...register('cidade', { validate: (value) => value.length > 0 })}
                    type="text"
                    placeholder="Sua cidade" />
                {errors.cidade && <p id='mensagemErro'>O campo está vazio</p>}
            </Form.Group>
            
            <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>Telefone *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.telefone}
                        {...register('telefone', {
                            validate: {
                                campoPreenchidoFone: (value) => value.length > 0,
                                tem11DigitosFone: (value) => value.length >= 11,
                            },
                        })}
                        type="number"
                        placeholder="(__) ____-____" />
                    {errors.telefone && errors.telefone.type === 'campoPreenchidoFone' && (
                        <p id='mensagemErro'>O campo está vazio</p>
                    )}
                    {errors.telefone && errors.telefone.type === 'tem11DigitosFone' && (
                        <p id='mensagemErro'>O telefone deve ter no mínimo 11 dígitos</p>
                    )}
                </Form.Group>
                <Container className="d-flex justify-content-center mt-3 mb-4">
          <Button
            onClick={() => {
                const values = getValues();
                console.log(values);
            }}
            type='submit'
            className="button-style">
            Finalizar
          </Button>
        </Container>
            </section>
            
            </div>
    );
}
export default DadosEntrega;