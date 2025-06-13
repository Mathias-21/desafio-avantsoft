import { customerInfoMocked } from '@/services/mock/customerInfo';
import { createCustomerProps } from '@/types';

export const createCustomer = async ({
  name,
  email,
  birthdate,
}: createCustomerProps) => {
  const customerToPush = {
    info: {
      nomeCompleto: name,
      detalhes: {
        email: email,
        nascimento: birthdate,
      },
    },
    estatisticas: {
      vendas: [],
    },
  };

  customerInfoMocked.clientes.push(customerToPush);
};
