import { ButtonHTMLAttributes, JSX } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant to control appearance
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the button is in loading state
   */
  isLoading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled,
  isLoading,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  // Base styles
  const baseStyles =
    'font-medium rounded-md inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

  // Size styles
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
    outline:
      'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:text-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-50 disabled:text-gray-300',
  };

  // Loading indicator
  const loadingIndicator = isLoading ? (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  ) : null;

  return (
    <button
      type={type}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && loadingIndicator}
      {children}
    </button>
  );
}

export default Button;
