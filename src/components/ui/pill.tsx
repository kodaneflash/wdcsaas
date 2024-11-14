import { Sparkle } from 'lucide-react';
import { cn } from '@/lib/utils'; // You'll need this utility

interface PillProps extends React.PropsWithChildren {
  className?: string;
}

export function Pill({ className, children }: PillProps) {
  return (
    <h2 
      className={cn(
        'inline-flex items-center space-x-2 rounded-full border border-border/50 bg-background/95 px-4 py-2 text-center text-sm text-muted-foreground shadow-sm',
        className
      )}
    >
      <Sparkle className={'inline-block h-4 w-4 text-muted-foreground'} />
      <span>{children}</span>
    </h2>
  );
}