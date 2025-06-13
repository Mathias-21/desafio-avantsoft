import React from 'react';
import { Card, CardTitle } from '../../ui/card';
import HighlightCard from './HighlightCard';

interface DashboardHighlightCustomersProps {
  data: {
    mostSales: { name: string; amount: number };
    avarageVolume: { name: string; amount: number };
    frequency: { name: string; amount: number };
  };
}

export default function DashboardHighlightCustomers({
  data,
}: DashboardHighlightCustomersProps) {
  return (
    <Card className="flex flex-col w-full p-5 bg-neutral-100">
      <CardTitle className="text-2xl font-bold text-neutral-800">
        Clientes em Destaque
      </CardTitle>
      <div className="flex items-center h-full gap-5">
        <HighlightCard
          name={data.mostSales.name}
          amount={data.mostSales.amount}
          label="🏆 Volume de Vendas"
          color="cyan"
        />
        <HighlightCard
          name={data.avarageVolume.name}
          amount={data.avarageVolume.amount}
          label="💰 Volume Médio"
          color="amber"
          isCurrency
        />
        <HighlightCard
          name={data.frequency.name}
          amount={data.frequency.amount}
          label="🔁 Frequência"
          color="lime"
        />
      </div>
    </Card>
  );
}
