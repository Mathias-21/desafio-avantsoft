import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { InputHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';

interface InputControlledProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control;
  label?: string;
}

export default function InputControlled({
  name,
  control,
  label,
  ...props
}: InputControlledProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <div className="flex flex-col gap-y-1.5">
          {label && <Label className="">{label}</Label>}
          <Input name={name} onChange={onChange} value={value} {...props} />
        </div>
      )}
    />
  );
}
