import { ReactNode } from 'react';
export default function Section({ id, className='', children }:{ id?:string; className?:string; children:ReactNode }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">{children}</div>
    </section>
  );
}
