// components/Card.js
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const CardOv = ({ title, img1, img2,number, percentage1 ,percentage2,greenUp, redDown}) => {
  return (
  <div className='rounded-md border border-sky-500 p-8'>
    <div className='flex'>
    <img src={img1} alt="" /> 
    </div>
    <div>
        <p>{number}</p>
    </div>
    <div >
        
       <p>{title}</p>
    </div>


  </div>
  );
}

export default CardOv;
