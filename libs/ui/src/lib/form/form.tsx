import { FormHTMLAttributes, JSX, ReactNode } from 'react';

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /**
   * Form title
   */
  title?: string;

  /**
   * Description text explaining the form's purpose
   */
  description?: string;

  /**
   * Custom actions to render in the form footer
   */
  actions?: ReactNode;

  /**
   * Form layout style
   */
  layout?: 'vertical' | 'horizontal' | 'inline';

  /**
   * Whether the form fields are disabled
   */
  disabled?: boolean;

  /**
   * Whether the form is in loading state
   */
  isLoading?: boolean;

  /**
   * Form content
   */
  children: ReactNode;
}

export const Form = ({
  title,
  description,
  actions,
  layout = 'vertical',
  disabled = false,
  isLoading = false,
  className = '',
  children,
  onSubmit,
  ...props
}: FormProps): JSX.Element => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) {
      e.preventDefault();
      return;
    }

    onSubmit?.(e);
  };

  const layoutStyles = {
    vertical: 'space-y-5',
    horizontal: 'md:grid md:grid-cols-2 md:gap-6',
    inline: 'flex items-end space-x-4',
  };

  const stateStyles = isLoading ? 'opacity-70 pointer-events-none' : '';

  return (
    <form
      className={`${layoutStyles[layout]} ${stateStyles} ${className}`}
      onSubmit={handleSubmit}
      {...props}
    >
      {(title || description) && (
        <div className="mb-5">
          {title && <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>}

          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      )}

      <fieldset disabled={disabled || isLoading}>{children}</fieldset>

      {actions && (
        <div
          className={`${layout === 'vertical' ? 'mt-8' : 'mt-5'} ${
            layout === 'horizontal' ? 'md:col-span-2' : ''
          } flex justify-end space-x-3`}
        >
          {actions}
        </div>
      )}
    </form>
  );
};

export default Form;
