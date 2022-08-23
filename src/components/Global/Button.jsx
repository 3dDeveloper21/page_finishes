import React from 'react'
import './Button.scss';

const Button = ({title, btnClass}) => {
  return (
    <>
      { title && <button className={`btn ${btnClass}`}>{title}</button> }
    </>
  )
}

export default Button;