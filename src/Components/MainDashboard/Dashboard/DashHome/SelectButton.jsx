import React from 'react'
import "./SelectButton.css"
import "@fontsource/rubik";
import "@fontsource/poppins";

const SelectButton = ({children,selected,onClick}) => {
  return (
    <span className='selectbutton' onClick={onClick}>
      {children}
    </span>
  )
}

export default SelectButton
