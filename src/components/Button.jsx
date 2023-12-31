import React from 'react'

const Button = ({text,paddingX,bgColor,textColor,paddingY}) => {
  return (
    <button className={`px-${paddingX} py-${paddingY} bg-${bgColor} text-${textColor}`}>
        {text}
    </button>
  )
}

export default Button