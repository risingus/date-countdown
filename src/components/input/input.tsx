'use client'
import { forwardRef } from 'react';
import styles from './styles.module.scss';


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean
  helperText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ hasError, helperText, placeholder, ...rest }, ref) => {
  return (
    <div className={styles['input-container']}>
      <label htmlFor="input" className={styles.label}>{placeholder}</label>
      <input
        id='input'
        className={styles.input}
        ref={ref}
        {...rest}
      />
      <span className={styles['helper-text']}>
        {helperText ? helperText : ''}
      </span>
    </div>
  )

})

Input.displayName = 'Input'