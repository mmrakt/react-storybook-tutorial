import './button.css'
import clsx from 'clsx'

function Button({ children, color = 'default', size ='base' }) {
  return <button className={clsx(color, size)}>{children}</button>;
}

export default Button;
