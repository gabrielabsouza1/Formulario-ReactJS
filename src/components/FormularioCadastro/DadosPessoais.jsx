import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Stack, Button, Container } from 'react-bootstrap';

function DadosPessoais() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const initialValues = {
        nome: '',
        sobrenome: '',
        cpf: '',
    };

    return (
        <Form className="mx-auto" 
        onSubmit={handleSubmit(onSubmit)}>
            <section className="d-flex align-items-center flex-column">
                <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>Nome *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.nome}
                        {...register('nome', { validate: (value) => value.length > 0 })}
                        type="text"
                        placeholder="Seu nome" />
                    {errors.nome && <p id='mensagemErro'>O campo está vazio</p>}
                </Form.Group>

                <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>Sobrenome *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.sobrenome}
                        {...register('sobrenome', { validate: (value) => value.length > 0 })}
                        type="text"
                        placeholder="Seu sobrenome" />
                    {errors.sobrenome && <p id='mensagemErro'>O campo está vazio</p>}
                </Form.Group>
                <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>CPF *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.cpf}
                        {...register('cpf', {
                            validate: {
                                campoPreenchidoCPF: (value) => value.length > 0,
                                tem11DigitosCPF: (value) => value.length === 11,
                            },
                        })}
                        type="number"
                        placeholder="Seu CPF" />
                    {errors.cpf && errors.cpf.type === 'campoPreenchidoCPF' && (
                        <p id='mensagemErro'>O campo está vazio</p>
                    )}
                    {errors.cpf && errors.cpf.type === 'tem11DigitosCPF' && (
                        <p id='mensagemErro'>O CPF deve ter 11 dígitos</p>
                    )}
                </Form.Group>
            </section>
            <Stack direction="horizontal" gap={2} className="justify-content-center">
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onChange={(event) => {
                                setPromocoes(event.target.checked)
                            }}
                            defaultChecked={promocoes}
                            type="switch"
                            id="custom-switch"
                            label="Promoções" />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onChange={(event) => {
                                setNovidades(event.target.checked)
                            }}
                            defaultChecked={novidades}
                            type="switch"
                            id="custom-switch"
                            label="Novidades" />
                    </Form.Group>
                </Row>
            </Stack>
            <Container className="d-flex justify-content-center mt-3 mb-4">
                <Button
                    type='submit'
                    className="button-style">
                    Cadastrar
                </Button>
            </Container>
        </Form>
    );
}
export default DadosPessoais;