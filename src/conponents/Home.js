import React from 'react'
import home from '../img/home.jpg'

const Home = () => {
  return (
    <div className='row'>
      <div className='home col-12'>
          <img src={home} className='img-home'/>
          <h1 className='h1-home'>
              <span className='span-home'>テキストテキスト</span><br/>
              <span className='span-home'>テキストテキスト</span><br/>
              <span className='span-home'>テキストテキスト</span><br/>
              <span className='span-home'>テキストテキスト</span><br/>
          </h1>
      </div>
    </div>
  )
}

export default Home