'use client';

import InputControlled from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { register, registerProps } from '@/services/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { FieldValue, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function Register() {
  const { control, handleSubmit } = useForm();

  function onSubmit(data: FieldValue<registerProps>) {
    console.log(data);
    register().then(() => {
      toast.success('Conta criada com sucesso!');
      redirect('/login');
    });
  }

  return (
    <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-xl font-bold">Crie sua conta</h1>
      <InputControlled
        name="user"
        control={control}
        label="Usuário:"
        placeholder="Digite seu usuário"
      />
      <InputControlled
        name="email"
        control={control}
        label="Email:"
        placeholder="Digite seu email"
      />
      <InputControlled
        name="password"
        control={control}
        label="Senha:"
        placeholder="Digite sua senha"
      />
      <p className="text-xs font-medium text-zinc-600">
        Já possui conta? Faça{' '}
        <Link href="/login" className="underline text-black cursor-pointer">
          Login
        </Link>
      </p>
      <Button>Criar</Button>
    </form>
  );
}
