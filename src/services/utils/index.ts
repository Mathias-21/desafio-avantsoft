import { CustomerInfoProps, SalesProps } from '@/types';

export function getLocalStoragedToken() {
  const token = localStorage.getItem('token');

  return token;
}

export function formatCustomerSalesDataForChart(
  data: CustomerInfoProps['data']
) {
  const allSales = data.clientes.flatMap(
    (client) => client.estatisticas?.vendas ?? []
  );

  const salesPerDate = allSales.reduce((acc, sale) => {
    if (!acc[sale.data]) {
      acc[sale.data] = 0;
    }
    acc[sale.data] += sale.valor;
    return acc;
  }, {} as Record<string, number>);

  const orderedSales = Object.entries(salesPerDate)
    .map(([data, valor]) => ({ data, valor }))
    .sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());

  return orderedSales;
}

export function sumCustomerSales(
  sales: { name: string; sales: SalesProps[] }[]
) {
  const combinedSales = sales
    .map((client) => {
      const avarage = client.sales.reduce((acc, sale) => {
        return acc + sale.valor;
      }, 0);

      return {
        name: client.name,
        amount: avarage || 0,
      };
    })
    .sort((a, b) => b.amount - a.amount);
  return combinedSales;
}

export function formatAllSalesByClient(
  clients: CustomerInfoProps['data']['clientes']
) {
  return clients.map((client) => {
    return {
      name: client.info.nomeCompleto,
      sales: client.estatisticas.vendas,
    };
  });
}

export function formatHighlightCustomersDataForChat(
  data: CustomerInfoProps['data']
) {
  const allSalesByClient = formatAllSalesByClient(data.clientes);

  const mostSales = sumCustomerSales(allSalesByClient)[0];

  const avarageVolume = allSalesByClient
    .map((client) => {
      const avarage =
        client.sales.reduce((acc, sale) => {
          return acc + sale.valor;
        }, 0) / client.sales.length;

      return {
        name: client.name,
        amount: avarage || 0,
      };
    })
    .sort((a, b) => b.amount - a.amount)[0];

  const frequency = allSalesByClient.sort(
    (a, b) => b.sales.length - a.sales.length
  )[0];

  return {
    mostSales: { name: mostSales.name, amount: mostSales.amount },
    avarageVolume: {
      name: avarageVolume.name,
      amount: avarageVolume.amount,
    },
    frequency: { name: frequency.name, amount: frequency.sales.length },
  };
}

export function formatCustomersDataForTable(data: CustomerInfoProps['data']) {
  const formattedData = data.clientes.map((client) => {
    const sumAmountPerCustomer = () => {
      return client.estatisticas.vendas.reduce(
        (acc, sale) => acc + sale.valor,
        0
      );
    };

    return {
      name: client.info.nomeCompleto,
      email: client.info.detalhes.email,
      birthdate: client.info.detalhes.nascimento,
      amount: sumAmountPerCustomer(),
      firstLetterMissingFromTheAlphabet: returnFirstAlphabetLetter(
        client.info.nomeCompleto
      ),
    };
  });

  return formattedData;
}

export function returnFirstAlphabetLetter(name: string) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const nameLetters = name.toLowerCase().normalize('NFD').split('');
  const alphabetLetterInName = [];

  for (let i = 0; i < alphabet.length; i++) {
    const alphabetLetter = alphabet[i];
    const nameLetter = nameLetters.find((letter) => letter === alphabetLetter);
    if (!nameLetter) alphabetLetterInName.push(alphabetLetter);
  }

  return alphabetLetterInName[0];
}
