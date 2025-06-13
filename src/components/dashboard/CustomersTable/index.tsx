import { Card, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';
import AddCustomerForm from './AddCustomerForm';

interface CustomersTableProps {
  data: {
    name: string;
    email: string;
    birthdate: string;
    amount: number;
    firstLetterMissingFromTheAlphabet: string;
  }[];
  onAddCustomer: () => void;
}

export default function CustomersTable({
  data,
  onAddCustomer,
}: CustomersTableProps) {
  return (
    <Card className="flex-1 w-full p-5 bg-neutral-100">
      <CardTitle className="text-2xl font-bold text-neutral-800">
        Tabela de Clientes
      </CardTitle>
      <AddCustomerForm onSuccess={onAddCustomer} />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Primeira Letra Ausente do Alfabeto</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="w-[150px]">Data de nascimento</TableHead>
            <TableHead className="text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((customer, i) => (
            <TableRow key={i}>
              <TableCell>{customer.name}</TableCell>
              <TableCell className="font-bold">
                {customer.firstLetterMissingFromTheAlphabet?.toUpperCase() ??
                  '-'}
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.birthdate}</TableCell>
              <TableCell className="text-right">
                {customer.amount.toLocaleString('pt-BR', {
                  currency: 'BRL',
                  style: 'currency',
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
