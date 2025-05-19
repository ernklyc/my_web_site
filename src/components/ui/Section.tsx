"use client";

import { cn } from '@/lib/utils/cn';
import { motion, Variants } from 'framer-motion';
import { forwardRef } from 'react';

interface SectionProps {
  fullHeight?: boolean;
  animate?: boolean;
  variants?: Variants;
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // To allow other props to be passed through
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    children, 
    className, 
    fullHeight = false, 
    animate = true, 
    variants, 
    as: Component = 'section', 
    ...props 
  }, ref) => {
    const sectionClasses = cn(
      'w-full px-4 py-16 md:py-24 mx-auto max-w-7xl',
      fullHeight && 'min-h-screen flex items-center',
      className
    );

    if (animate) {
      // Create a default variant if none is provided
      const defaultVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96] 
          } 
        }
      };      // Extract any HTML attributes that might conflict with motion props
      // These are intentionally destructured and not used to prevent type conflicts
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onDrag, onDragEnd, onDragStart, ...otherProps } = props;      return (
        <motion.section
          // Use a more specific type for the ref
          ref={ref as React.Ref<HTMLElement>}
          className={sectionClasses}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={variants || defaultVariants}
          {...otherProps}
        >
          {children}
        </motion.section>
      );
    }

    return (
      <Component ref={ref} className={sectionClasses} {...props}>
        {children}
      </Component>
    );
  }
);

Section.displayName = 'Section';

export { Section };
