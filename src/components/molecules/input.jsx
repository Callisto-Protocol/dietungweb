/* eslint-disable react/prop-types */
import {React, useId} from 'react';
import BaseLabel from '../atoms/label';

const BaseInput = (props) => {
  const {
    label,
    type = 'text',
    error = false,
    required = false,
    disabled = false,
    valid = false,
    className = '',
    errorText = '',
    rounded = 'lg',
    ...rest
  } = props;

  const id = useId();
  const styles = {
    base: 'border-transparent flex-1 appearance-none border w-full py-2 px-3 bg-white text-gray-700  shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent',
    state: {
      normal: 'placeholder-gray-400 border-gray-300 focus:ring-blue-300 ',
      error: 'border-red-600 focus:ring-red-600',
      valid: 'border-green-600 focus:ring-green-600',
      disabled: 'cursor-not-allowed bg-gray-100 shadow-inner text-gray-400',
    },
    rounded: {
      none: null,
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    },
  };
  return (
    <div className={`relative ${className}`}>
      {label && (
        <BaseLabel >
          {label} {required && '*'}
        </BaseLabel>
      )}
      <input
        id={id}
        type={type}
        className={
          `${styles.base}
          ${rounded && styles.rounded[rounded]}
          ${error ? styles.state.error : styles.state.normal}
          ${valid ? styles.state.valid : styles.state.normal}
          ${disabled && styles.state.disabled}`
        }
        disabled={disabled}
        required={required}
        {...rest}
      />
      {error && <p className='mt-2 text-sm text-red-600'>{errorText}</p> }
      
    </div>
  );
};

export default BaseInput;
