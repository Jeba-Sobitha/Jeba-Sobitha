import React from 'react';
import './Footer.css';
import img from '../Images/img1.png'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <img className='image' src={img} alt='Image of a computer' />
            <div>
            </div>
        </div>
        <p>&copy; Copyright reserved. Created by Jeba Sobitha.</p>
    </div>
  )
}
