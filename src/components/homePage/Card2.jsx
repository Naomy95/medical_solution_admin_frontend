// components/Card.js
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card2 = ({ title, img1, img2,number, percentage1 ,percentage2,Statistic, redDown,title1 ,greenUp, title2}) => {
  return (
  <div className='rounded-md border border-sky-500 p-8'>
    <div className='flex'>
        <div className='flex'>
        <img src={img1} alt="" /> 
        <p>{title1}</p>
        <img src={img2} alt="" />
        <p>{title2}</p>
        </div>
    
        
    </div>
    <div>
        <img src={Statistic} alt="" />
    </div>
    <div className='flex '>
        <p>sa</p>
        <p>su</p>
        <p>Mo</p>
        <p>Tu</p>
        <p>We</p>
        <p>Thu</p>
        <p>Fri</p>

    </div>


  </div>
  );
}

export default Card2;
