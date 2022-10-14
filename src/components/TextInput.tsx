import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-3 px-4 w-full rounded bg-gray-800 focus-within:ring-2 ring-violet-700">
      {children}
    </div>
  )
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputElement(props: TextInputProps) {
  return (
    <input 
      className="flex-1 outline-none bg-transparent text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  )
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {props.children}
    </Slot>
  )
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputElement,
  Icon: TextInputIcon
}