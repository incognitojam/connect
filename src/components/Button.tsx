import React, { ReactNode } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

export default function Button(props: ButtonProps) {
  const { children, ...rest } = props;
  return (
    <button
      className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
      {...rest}
    >
      {props.children}
    </button>
  );
}
