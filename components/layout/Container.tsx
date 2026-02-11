import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export default Container;
