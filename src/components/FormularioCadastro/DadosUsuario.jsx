import React from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';


function DadosUsuario() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    const initialValues = {
        email: '',
        senha: '',
    };
    return (
        <Form className="mx-auto"
            onSubmit={handleSubmit(onSubmit)}>
            <section className="d-flex align-items-center flex-column">
                <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.email}
                        {...register('email', { validate: (value) => value.length > 0 })}
                        type="email"
                        placeholder="seuemail@dominio.com.br" />
                    {errors.email && <p id='mensagemErro'>O campo está vazio</p>}
                </Form.Group>
                <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>Senha *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.senha}
                        {...register('senha', { validate: (value) => value.length > 0 })}
                        type="password"
                        placeholder="Sua senha" />
                    {errors.senha && <p id='mensagemErro'>O campo está vazio</p>}
                </Form.Group>
            </section>
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

export default DadosUsuario;