'use client';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
export const description = 'A bar chart';

const chartConfig = {
  valor: {
    label: 'Quantidade',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

interface DashboardTotalSalesPerDayChartProps {
  data: { data: string; valor: number }[];
}

export default function DashboardTotalSalesPerDayChart({
  data,
}: DashboardTotalSalesPerDayChartProps) {
  return (
    <Card className="w-full p-5 bg-neutral-100">
      <CardTitle className="text-2xl font-bold text-neutral-800">
        Total de Vendas por dia
      </CardTitle>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="data"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                new Date(`${value}T12:00:00`).toLocaleDateString('pt-BR')
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="valor"
                  labelFormatter={(value) => {
                    return new Date(`${value}T12:00:00`).toLocaleDateString(
                      'pt-BR',
                      {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      }
                    );
                  }}
                />
              }
            />
            <Bar dataKey="valor" fill="var(--color-valor)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
