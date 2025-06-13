import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ptBR } from 'date-fns/locale';
import { ChevronDownIcon } from 'lucide-react';
import React, { InputHTMLAttributes, useState } from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { addDays, format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

interface DatePickerControlledProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
}
export default function DatePickerControlled<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = 'Selecione a data',
}: DatePickerControlledProps<T>) {
  const [open, setOpen] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => {
        const handleChange = (e: Date | undefined) => {
          if (e) {
            const formattedDate = format(new Date(e), 'yyyy-MM-dd');
            const dateCorrected = format(
              addDays(formattedDate, 1),
              'yyyy-MM-dd'
            );
            onChange(dateCorrected);
          }
        };

        return (
          <div className="flex flex-col gap-y-1.5 w-full">
            {label && <Label>{label}</Label>}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  id="date"
                  className={cn(
                    'justify-between font-normal',
                    value
                      ? 'text-black'
                      : 'text-muted-foreground  hover:text-muted-foreground'
                  )}
                >
                  {value
                    ? new Date(addDays(value, 1)).toLocaleDateString()
                    : placeholder}
                  <ChevronDownIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto overflow-hidden p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={addDays(value, 1)}
                  captionLayout="dropdown"
                  onSelect={(e) => handleChange(e)}
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>
          </div>
        );
      }}
    />
  );
}
