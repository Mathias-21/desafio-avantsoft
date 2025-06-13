export interface SalesProps {
  data: string;
  valor: number;
}

export interface CustomerInfoProps {
  data: {
    clientes: {
      info: {
        nomeCompleto: string;
        detalhes: {
          email: string;
          nascimento: string;
        };
      };
      duplicado: {
        nomeCompleto: string;
      };
      estatisticas: {
        vendas: SalesProps[];
      };
    }[];
  };
  meta: {
    registroTotal: number;
    pagina: number;
  };
  redundante: {
    status: string;
  };
}

export interface createCustomerProps {
  name: string;
  email: string;
  birthdate: string;
}
