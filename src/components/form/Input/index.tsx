import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { InputHTMLAttributes } from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';

interface InputControlledProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
}

export default function InputControlled<T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: InputControlledProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value = '' } }) => (
        <div className="flex flex-col gap-y-1.5 w-full">
          {label && <Label>{label}</Label>}
          <Input name={name} onChange={onChange} value={value} {...props} />
        </div>
      )}
    />
  );
}
