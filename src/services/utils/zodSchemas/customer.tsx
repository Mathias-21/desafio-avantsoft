import z from 'zod/v4';

export const newCustomerSchema = z.object({
  name: z.string('Por favor, preencha o nome'),
  email: z.string('Por favor, preencha o email').email('Email inválido'),
  birthdate: z.string('Por favor, selecione a data de nascimento'),
});
