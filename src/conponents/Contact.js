import React from 'react'
import contact from '../img/contact.png'

const Contact = () => {
  const arr = [
    {img:contact, text: 'テキスト'},
    {img:contact, text: 'テキスト'},
    {img:contact, text: 'テキスト'},
    {img:contact, text: 'テキスト'},
  ];
  
  return (
    <div className='contact'>
      <h1 className='title'>Contact</h1>

      <ul className='row mx-auto contact-ul'>
        {arr.map((arr) => 
          <li className='contact-li col-md-3 col-xs-6'>
            <img className='contact-img' src={arr.img}></img>
            <p className='contact-p'>{arr.text}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Contact