import React from 'react';

export function Badge({ variant = 'default', className, children, ...props }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2";
  const variants = {
    default: "bg-slate-50 text-slate-900 hover:bg-slate-50/80",
    secondary: "bg-slate-800 text-slate-50 hover:bg-slate-800/80",
    outline: "text-slate-50 border border-slate-800"
  };
  return (
    <div className={`${base} ${variants[variant] || variants.default} ${className || ''}`} {...props}>
      {children}
    </div>
  );
}
