import React, { useState } from 'react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className="navigation">
        <h1>Welcome to Mini E-Learning!!!</h1>
          <button className='hamburger' onClick={()=>setIsOpen(!isOpen)} >☰</button>
        <ul className={`menu ${isOpen ? 'open': ''}`} >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/my-progress">My Progress</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
