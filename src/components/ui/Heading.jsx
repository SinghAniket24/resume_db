import React from 'react';

export function Heading({ as: Component = 'h2', className, children, ...props }) {
  return (
    <Component className={`text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading ${className || ''}`} {...props}>
      {children}
    </Component>
  );
}
