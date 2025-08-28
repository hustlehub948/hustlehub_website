import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'solid' | 'outline' };

export default function Button({ variant='solid', className='', ...props }: Props) {
  const base = variant === 'solid' ? 'btn' : 'btn-outline';
  return <button {...props} className={`${base} ${className}`} />;
}
