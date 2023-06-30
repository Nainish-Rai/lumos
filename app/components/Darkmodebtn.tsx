'use client'
import React,{useState} from 'react'

type Props = {}

function Darkmodebtn({}: Props) {
    const [isDarkMode,setIsDarkMode] = useState<boolean>(false)
  return (
    <div onClick={()=>setIsDarkMode(prev=>!prev)}>{isDarkMode?"DarkMode":"LightMode"}</div>
  )
}

export default Darkmodebtn