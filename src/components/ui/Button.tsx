import React from 'react'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  children: React.ReactNode
  className?: string
}
export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center px-8 py-4 text-sm uppercase tracking-widest font-medium transition-all duration-300 rounded-none border border-black'
  const variants = {
    primary: 'bg-black text-white hover:bg-white hover:text-black',
    outline: 'bg-transparent text-black hover:bg-black hover:text-white',
    ghost: 'border-transparent bg-transparent text-black hover:border-black',
  }
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
