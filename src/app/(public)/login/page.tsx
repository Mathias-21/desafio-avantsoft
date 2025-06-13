'use client';

import InputControlled from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { login, loginProps } from '@/services/auth';
import Link from 'next/link';
import React from 'react';
import { FieldValue, useForm } from 'react-hook-form';

export default function Login() {
  const { control, handleSubmit } = useForm();

  function onSubmit(data: FieldValue<loginProps>) {
    login(data);
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl font-bold">Faça Login</h1>
      <InputControlled
        name="user"
        control={control}
        label="Usuário:"
        placeholder="Digite seu usuário"
      />
      <InputControlled
        name="password"
        control={control}
        label="Senha:"
        placeholder="Digite sua senha"
      />
      <p className="text-xs font-medium text-zinc-600">
        Não possui uma conta? Cadastre-se{' '}
        <Link href="/register" className="underline text-black cursor-pointer">
          aqui
        </Link>
      </p>
      <Button type="submit">Entrar</Button>
    </form>
  );
}
