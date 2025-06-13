import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface HighlightCardProps {
  name: string;
  amount: number;
  label: string;
  color?: 'cyan' | 'amber' | 'lime';
  isCurrency?: boolean;
}

const colorMap = {
  cyan: {
    bg: 'bg-cyan-600',
    badge: 'bg-cyan-900',
  },
  amber: {
    bg: 'bg-amber-600',
    badge: 'bg-amber-900',
  },
  lime: {
    bg: 'bg-lime-600',
    badge: 'bg-lime-900',
  },
};

export default function HighlightCard({
  name,
  amount,
  label,
  color,
  isCurrency,
}: HighlightCardProps) {
  return (
    <Card
      className={cn(
        'flex justify-between items-center flex-1 px-5 h-[70%] text-white',
        color && colorMap[color].bg
      )}
    >
      <p className="text-xl font-bold text-center">{name}</p>
      {isCurrency ? (
        <span className="text-xl font-bold">
          R$
          <span className="text-5xl font-black">
            {String(amount.toFixed(2)).slice(0, -3)}
            <span className="text-xl font-bold">
              ,{amount.toFixed(2).slice(-2)}
            </span>
          </span>
        </span>
      ) : (
        <span className="text-5xl font-black">{amount}</span>
      )}
      <Badge className={color && colorMap[color].badge}>{label}</Badge>
    </Card>
  );
}
