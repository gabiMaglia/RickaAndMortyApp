

import  styles  from './button.module.css'

const Button = (props) => {

    return (
    <button className={styles.btn_two}>{props.content}</button>
  )
}

export default Button

