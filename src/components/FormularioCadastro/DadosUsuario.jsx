import React from 'react';
import { useForm } from "react-hook-form";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container } from 'react-bootstrap';


function DadosUsuario() {
    const { getValues, register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });

    const onSubmit = (data) => {
        console.log(JSON.stringify(data))
    }

    const initialValues = {
        email: '',
        senha: '',
    };
    return (
        <div className="mx-auto"
            onSubmit={handleSubmit(onSubmit)}>
            <section className="d-flex align-items-center flex-column">
                <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.email}
                        {...register('email', { validate: (value) => value.length > 0 })}
                        type="email"
                        placeholder="seuemail@dominio.com.br"
                    />
                    {errors.email && <p id='mensagemErro'>O campo está vazio</p>}
                </Form.Group>
                <Form.Group className="mb-3 col-sm-6">
                    <Form.Label>Senha *</Form.Label>
                    <Form.Control
                        defaultValue={initialValues.senha}
                        {...register('senha', { validate: (value) => value.length > 0 })}
                        type="password"
                        placeholder="Sua senha"
                    />
                    {errors.senha && <p id='mensagemErro'>O campo está vazio</p>}
                </Form.Group>
                <Container className="d-flex justify-content-center mt-3 mb-4">
                    <Button
                        onClick={() => {
                            const values = getValues();
                            console.log(values);
                        }}
                        type='submit'
                        className="button-style">
                        Próximo
                    </Button>
                </Container>
            </section>

        </div>
    );
}

export default DadosUsuario;