export const customerInfoMocked = {
  clientes: [
    {
      info: {
        nomeCompleto: 'Bianca Duarte',
        detalhes: {
          email: 'bianca.@example.com',
          nascimento: '1992-05-01',
        },
      },
      estatisticas: {
        vendas: [
          { data: '2024-01-01', valor: 150 },
          { data: '2024-01-02', valor: 50 },
        ],
      },
    },
    {
      info: {
        nomeCompleto: 'Carlos Eduardo',
        detalhes: {
          email: 'cadu@example.com',
          nascimento: '1987-08-15',
        },
      },
      duplicado: {
        nomeCompleto: 'Carlos Eduardo',
      },
      estatisticas: {
        vendas: [],
      },
    },
    {
      info: {
        nomeCompleto: 'Carla Borges',
        detalhes: {
          email: 'carla.borges@example.com',
          nascimento: '1990-12-11',
        },
      },
      estatisticas: {
        vendas: [
          { data: '2024-01-01', valor: 200 },
          { data: '2024-02-03', valor: 600 },
          { data: '2024-02-10', valor: 380 },
          { data: '2024-02-15', valor: 1226 },
        ],
      },
    },
    {
      info: {
        nomeCompleto: 'abcdefghijklmnopqrstuvwxyz',
        detalhes: {
          email: 'teste.todas.as.letras@example.com',
          nascimento: '1985-03-20',
        },
      },
      estatisticas: {
        vendas: [{ data: '2024-03-01', valor: 100 }],
      },
    },
    {
      info: {
        nomeCompleto: 'Bruno silva',
        detalhes: {
          email: 'bruno.s@example.com',
          nascimento: '1995-07-22',
        },
      },
      estatisticas: {
        vendas: [
          { data: '2024-01-05', valor: 500 },
          { data: '2024-01-12', valor: 300 },
          { data: '2024-01-18', valor: 700 },
          { data: '2024-02-01', valor: 400 },
          { data: '2024-02-02', valor: 400 },
        ],
      },
    },
  ],
};
// {
//     clientes: [
//       {
//         info: {
//           nomeCompleto: 'Ana Beatriz',
//           detalhes: {
//             email: 'ana.b@example.com',
//             nascimento: '1992-05-01',
//           },
//         },
//         estatisticas: {
//           vendas: [
//             { data: '2024-01-01', valor: 150 },
//             { data: '2024-01-02', valor: 50 },
//           ],
//         },
//       },
//       {
//         info: {
//           nomeCompleto: 'Carlos Eduardo',
//           detalhes: {
//             email: 'cadu@example.com',
//             nascimento: '1987-08-15',
//           },
//         },
//         duplicado: {
//           nomeCompleto: 'Carlos Eduardo',
//         },
//         estatisticas: {
//           vendas: [],
//         },
//       },
//     ],
//   }
