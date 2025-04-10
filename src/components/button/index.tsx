import styles from './styles.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean
}


const Button = ({secondary, children, ...props}: ButtonProps) => {
  return (
    <button {...props} className={styles[!secondary ? 'primary' : 'secondary' ]}>
      <span>
        {children}
      </span>
    </button>
  )
}


export default Button