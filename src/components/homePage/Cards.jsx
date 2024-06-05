// components/Card.js
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card = ({ title, img1, img2,number, percentage1 ,percentage2,greenUp, redDown}) => {
  return (
  <div className='rounded-md border border-sky-500 p-8'>
    <div className='flex'>
    <img src={img1} alt="" /> 
    <img src={img2} alt="" />
    </div>
    <div>
        {title}
    </div>
    <div className='flex'>
        <p>{number}</p>
        <img src={greenUp} alt="" />
        <img src={redDown} alt="" />
        <p>{percentage1}</p>
        <p>{percentage2}</p>
    </div>


  </div>
  );
}

export default Card;
