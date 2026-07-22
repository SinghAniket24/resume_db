import React from 'react';

export function Container({ className, children, ...props }) {
  return (
    <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className || ''}`} {...props}>
      {children}
    </div>
  );
}
