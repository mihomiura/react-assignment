import React from 'react'
import skill1 from '../img/skill1.png'
import skill2 from '../img/skill2.png'
import skill3 from '../img/skill3.png'
import skill4 from '../img/skill4.png'
import skill5 from '../img/skill5.png'
import skill6 from '../img/skill6.png'


const Skill = () => {
  const arr = [
    {name:'HTML' , img:skill1, text: 'テキストテキストテキストテキスト'},
    {name:'CSS' , img:skill2, text: 'テキストテキストテキストテキスト'},
    {name:'JavaScript' ,img:skill3 , text: 'テキストテキストテキストテキスト'},
    {name:'PHP' , img:skill4, text: 'テキストテキストテキストテキスト'},
    {name:'Python' , img:skill5, text: 'テキストテキストテキストテキスト'},
    {name:'MySQL' , img:skill6, text: 'テキストテキストテキストテキスト'},
    {name:'Laravel' , img:skill1, text: 'テキストテキストテキストテキスト'},
    {name:'CakePHP' , img:skill2, text: 'テキストテキストテキストテキスト'},
    {name:'React' , img:skill3, text: 'テキストテキストテキストテキスト'},
    {name:'Git/Github' , img:skill4, text: 'テキストテキストテキストテキスト'},
    {name:'aws' , img:skill5, text: 'テキストテキストテキストテキスト'},
  ];
  return (
    <div className='skill'>
      <h1 className='title'>Skill</h1>
      <ul className='row'>
        {arr.map((arr) => 
          <li className='skill-li col-md-4 col-sm-6 col-xs-12'>
            <h2 className='skii-h2'>{arr.name}</h2>
            <img className='skill-img' src={arr.img}></img>
            <p className='skill-p'>{arr.text}</p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Skill