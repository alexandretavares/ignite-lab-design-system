import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode,
  asChild: boolean
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp 
      className={clsx(
        'py-4 px-3 bg-violet-700 rounded font-semibold text-gray-100 text-sm w-full hover:bg-violet-500 transition-colors focus:ring-2 ring-gray-400'
      )}
    >
      {children}
    </Comp>
  )
}