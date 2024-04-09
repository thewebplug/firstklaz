import React, { useLayoutEffect } from 'react';
import '../styles/Test.scss'
import Amanda from "../img/Amanda.png";

import { Link } from 'react-router-dom'


const Test = () => {
   
    return (
     
      <div className='not_found'>
        <div className='four_o_four'>404</div>
        <img className='amanda' src={Amanda} alt="" />
        <div className='title'>OOps! Just Amanda Here</div>
        <div className='subtitle'>Don't worry, come with me. <br /> I'll lead you back to firstklaz</div>
        <Link to="/"><button>Follow Amanada</button></Link>
      </div>
    )
}

export default Test;