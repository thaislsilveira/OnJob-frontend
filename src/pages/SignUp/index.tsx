import React, { useCallback, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import api from '../../services/api';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: FormData) => {
      try {
        formRef.current?.setErrors({});

        await api.post('/auth/local/register', data);

        console.log(data);

        history.push('/');

        console.log('sucesso!');
      } catch (err) {
        console.log('Error!');
      }
    },
    [history],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h1> Faça seu cadastro como Estudante</h1>
      <Input name="name" placeholder="Nome" />
      <Input name="lastname" placeholder="Sobrenome" />
      <Input name="email" placeholder="E-mail" />
      <Input name="cpf" placeholder="cpf" />
      <Input name="state" placeholder="Estado" />
      <Input name="city" placeholder="Cidade" />
      <Input name="birthDate" placeholder="Data de Aniversário" />
      <textarea name="about" placeholder="sobre" />

      <Input name="password" type="password" placeholder="Senha" />

      <Button type="submit">Cadastrar</Button>
    </Form>
  );
};

export default SignUp;
