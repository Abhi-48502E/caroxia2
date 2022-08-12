import React from 'react'
import './about.css'
import carfind from '../../assets/car-fing.png'
import carfind2 from '../../assets/car-service.jpg'
import carfind3 from '../../assets/mech.jpg'
import carfind4 from '../../assets/mech2.jpg'



function About() {
  return (
                                         <div className='main-about'>
      <div className="headingz">
        <h1>About-CAROXIA</h1>
      </div>
      <div className='listed-img'>
      <div className="label-images">
        <img src={carfind} alt="gg" className='pics' />
        <img src={carfind2} alt="gg" className='pics2' />
        <img src={carfind3} alt="gg" className='pics3' />
        <img src={carfind4} alt="gg" className='pics4' />

      </div>
      </div>

    </div>
  )
}

export default About