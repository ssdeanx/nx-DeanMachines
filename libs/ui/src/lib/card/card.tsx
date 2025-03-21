import { HTMLAttributes, JSX, ReactNode } from 'react';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Card title content
   */
  title?: ReactNode;

  /**
   * Card subtitle content
   */
  subtitle?: ReactNode;

  /**
   * Card footer content
   */
  footer?: ReactNode;

  /**
   * Whether to use a compact padding style
   */
  compact?: boolean;

  /**
   * Card elevation/shadow level
   */
  elevation?: 'none' | 'sm' | 'md' | 'lg';

  /**
   * Whether the card is bordered
   */
  bordered?: boolean;

  /**
   * Card content
   */
  children: ReactNode;
}

export const Card = ({
  title,
  subtitle,
  footer,
  compact = false,
  elevation = 'sm',
  bordered = false,
  className = '',
  children,
  ...props
}: CardProps): JSX.Element => {
  // Base styles
  const baseStyles = 'bg-white rounded-lg overflow-hidden';

  // Elevation/shadow styles
  const elevationStyles = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  };

  // Border styles
  const borderStyles = bordered ? 'border border-gray-200' : '';

  // Padding styles
  const contentPadding = compact ? 'p-3' : 'p-5';
  const headerPadding = compact ? 'px-3 pt-3 pb-2' : 'px-5 pt-5 pb-3';
  const footerPadding = compact ? 'px-3 pt-2 pb-3' : 'px-5 pt-3 pb-5';

  return (
    <div
      className={`${baseStyles} ${elevationStyles[elevation]} ${borderStyles} ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <div className={`${headerPadding} ${subtitle ? 'pb-1' : ''}`}>
          {title && <h3 className="text-lg font-medium text-gray-900">{title}</h3>}
          {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
        </div>
      )}

      <div className={contentPadding}>{children}</div>

      {footer && (
        <div className={`${footerPadding} border-t border-gray-100 bg-gray-50`}>{footer}</div>
      )}
    </div>
  );
};

export default Card;
