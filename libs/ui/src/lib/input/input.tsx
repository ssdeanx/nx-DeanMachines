import React, { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Label for the input
   */
  label?: string;

  /**
   * Helper text to be displayed below the input
   */
  helperText?: string;

  /**
   * Error message to be displayed
   */
  error?: string;

  /**
   * Input size
   */
  inputSize?: 'sm' | 'md' | 'lg';

  /**
   * Whether the input is in a loading state
   */
  isLoading?: boolean;

  /**
   * Left icon component
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon component
   */
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      inputSize = 'md',
      className = '',
      disabled,
      isLoading,
      leftIcon,
      rightIcon,
      type = 'text',
      id,
      ...props
    },
    ref
  ) => {
    // Create an ID if one isn't provided
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    // Base styles
    const baseStyles =
      'w-full rounded-md border-gray-300 shadow-sm transition-colors focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50';

    // Size styles
    const sizeStyles = {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-3 py-2',
      lg: 'text-base px-4 py-3',
    };

    // Status styles
    const statusStyles = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : disabled
      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
      : '';

    // Loading styles
    const loadingStyles = isLoading ? 'opacity-70 cursor-wait' : '';

    // Icon container styles
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;
    const leftPadding = hasLeftIcon ? 'pl-9' : '';
    const rightPadding = hasRightIcon ? 'pr-9' : '';

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}

        <div className="relative">
          {hasLeftIcon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            type={type}
            className={`${baseStyles} ${sizeStyles[inputSize]} ${statusStyles} ${loadingStyles} ${leftPadding} ${rightPadding} ${className}`}
            disabled={disabled || isLoading}
            {...props}
          />

          {hasRightIcon && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
              {rightIcon}
            </div>
          )}

          {isLoading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="animate-spin h-4 w-4 text-gray-500"
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
            </div>
          )}
        </div>

        {(helperText || error) && (
          <p className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
