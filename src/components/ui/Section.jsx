import React from 'react';

export function Section({ id, className, children, ...props }) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className || ''}`} {...props}>
      {children}
    </section>
  );
}
