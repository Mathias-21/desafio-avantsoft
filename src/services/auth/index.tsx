'use server';

import jwt from 'jsonwebtoken';
import { FieldValues } from 'react-hook-form';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export interface loginProps extends FieldValues {
  user: string;
  password: string;
}

export interface registerProps extends loginProps {
  email: string;
}

export const login = async (props: loginProps) => {
  const token = jwt.sign(props, 'privateKey');

  const cookieStore = await cookies();
  cookieStore.set('token', token);

  redirect('/dashboard');
};

export const register = async () => {
  // lógica de enviar para a API
};

export const logout = async () => {
  const cookieStore = await cookies();
  cookieStore.delete('token');

  redirect('/login');
};
