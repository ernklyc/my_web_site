"use client";

import { cn } from '@/lib/utils/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  isExternal?: boolean;
  isAnimated?: boolean;
  disabled?: boolean;
}

const buttonVariants = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
  outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost: 'bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
};

const buttonSizes = {
  sm: 'text-sm px-3 py-1.5 rounded-md',
  md: 'text-base px-4 py-2 rounded-md',
  lg: 'text-lg px-6 py-3 rounded-lg',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      href,
      isExternal = false,
      isAnimated = true,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      buttonVariants[variant],
      buttonSizes[size],
      className
    );

    const ContentWrapper = isAnimated
      ? ({ children }: { children: React.ReactNode }) => (
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center"
          >
            {children}
          </motion.span>
        )
      : ({ children }: { children: React.ReactNode }) => (
          <span className="flex items-center justify-center">{children}</span>
        );    if (href) {
      // For external links, use a standard anchor tag
      return isExternal ? (
        <a
          href={href}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
          // Only pass through props that are valid for anchor elements
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          <ContentWrapper>{children}</ContentWrapper>
        </a>
      ) : (
        // For internal links, use Next.js Link component
        <Link 
          href={href} 
          className={baseClasses} 
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          <ContentWrapper>{children}</ContentWrapper>
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        <ContentWrapper>{children}</ContentWrapper>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants, buttonSizes };
export type { ButtonProps, ButtonVariant, ButtonSize };
