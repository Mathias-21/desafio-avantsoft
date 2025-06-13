import DatePickerControlled from '@/components/form/DatePicker';
import InputControlled from '@/components/form/Input';
import { Button } from '@/components/ui/button';
import { createCustomer } from '@/services/api/customers/create';
import { newCustomerSchema } from '@/services/utils/zodSchemas/customer';
import { createCustomerProps } from '@/types';
import { PlusCircleIcon } from 'lucide-react';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface AddCustomerFormProps {
  onSuccess: () => void;
}

export default function AddCustomerForm({ onSuccess }: AddCustomerFormProps) {
  const { control, handleSubmit, reset } = useForm<createCustomerProps>();
  const [adding, setAdding] = useState(false);

  const onSubmit: SubmitHandler<createCustomerProps> = async (
    data: createCustomerProps
  ) => {
    const result = newCustomerSchema.safeParse(data);
    if (!result.success) {
      const warningMessage = JSON.parse(result.error.message)[0].message;
      toast.warning(warningMessage);
    } else {
      await createCustomer(data);
      reset();
      onSuccess();
    }
  };

  return (
    <div className="flex w-full justify-end">
      {adding ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-end gap-4 w-full"
        >
          <InputControlled
            name="name"
            control={control}
            label="Nome:"
            placeholder="Digite o nome"
            className="bg-white"
          />
          <InputControlled
            name="email"
            control={control}
            label="Email:"
            placeholder="Digite o email"
            className="bg-white"
          />
          <DatePickerControlled
            name="birthdate"
            control={control}
            label="Data de Nascimento:"
          />
          <Button type="submit">Adicionar</Button>
          <Button
            className="bg-red-500 hover:bg-red-600"
            onClick={() => {
              setAdding(false);
              reset();
            }}
          >
            Cancelar
          </Button>
        </form>
      ) : (
        <div className="py-[10px]">
          <Button onClick={() => setAdding(!adding)}>
            Adicionar Novo Cliente <PlusCircleIcon />{' '}
          </Button>
        </div>
      )}
    </div>
  );
}
