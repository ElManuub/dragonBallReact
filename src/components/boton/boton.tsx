import type { ReactNode } from 'react';
import './boton.css'

interface BotonProps {
    children: ReactNode;
}

export function Boton({ children }: BotonProps) {
  return (
    <>
      <button className="btn_nuevo">{children}</button>
    </>
  );
}
