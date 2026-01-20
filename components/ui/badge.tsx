import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        // Portfolio variants (Windows-safe: we reuse this file instead of creating Badge.tsx)
        backend:
          'border-transparent bg-sky-600/20 text-sky-300 hover:bg-sky-600/30',
        database:
          'border-transparent bg-fuchsia-600/20 text-fuchsia-300 hover:bg-fuchsia-600/30',
        cloud:
          'border-transparent bg-orange-600/20 text-orange-300 hover:bg-orange-600/30',
        frontend:
          'border-transparent bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30',
        ai: 'border-transparent bg-pink-600/20 text-pink-300 hover:bg-pink-600/30',
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
