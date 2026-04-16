import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyle = "px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow-md",
    secondary: "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white",
    outline: "border border-zinc-200 hover:bg-zinc-50 text-zinc-700 dark:border-zinc-700 dark:hover:bg-zinc-800 dark:text-zinc-300"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
