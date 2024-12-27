/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import clsx from "clsx";

export function Button({ 
  variant = 'primary', 
  children, 
  className, 
  ...props 
}) {
  return (
    <button
      className={clsx(
        'inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500': variant === 'primary',
          'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
