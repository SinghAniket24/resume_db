import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', asChild = false, href, children, ...props }, ref) => {
  const Comp = asChild ? 'span' : (href ? 'a' : 'button');
  
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-500/20",
    secondary: "bg-slate-800/80 text-slate-50 hover:bg-slate-700",
    outline: "border border-white/10 bg-transparent hover:bg-slate-800 hover:text-indigo-400",
    ghost: "hover:bg-slate-800 hover:text-slate-50 text-slate-300",
    link: "text-indigo-400 underline-offset-4 hover:underline",
    icon: "h-10 w-10 p-0 rounded-full hover:bg-slate-800 flex items-center justify-center text-slate-300"
  };

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10"
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    variant !== 'icon' ? sizes[size] : sizes.icon,
    className
  );

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
      <Comp
        className={classes}
        ref={ref}
        href={href}
        {...props}
      >
        {children}
      </Comp>
    </motion.div>
  );
});
Button.displayName = "Button";

export { Button };
