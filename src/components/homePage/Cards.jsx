// components/Card.js
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card = ({ title, img1, img2,number, percentage1 ,percentage2,greenUp, redDown}) => {
  return (
  <div className='rounded-md border shadow-md p-4'>
    <div className='grid grid-cols-2 justify-items-stretch'>
    <img style={{width:"50px", height:"50px"}} src={img1} alt="" /> 
    <img className='justify-self-end' style={{width:"30px", height:"30px"}}  src={img2} alt="" />
    </div>
    <div className='mt-4'>
       <p className='font-semibold font-sans'> {title}</p>
    </div>
    <div className='grid grid-cols-2 mt-6 font-sans'>
        <p className='text-red-600 font-bold text-lg'>{number}</p>
        <div className='flex'>
        <img src={greenUp} alt="" />
        
        <p className='mt-2 font-medium'>{percentage1}</p>
        <img src={redDown} alt="" />
        <p className='mt-2 font-medium'>{percentage2}</p>
        </div>
    </div>


  </div>
  );
}

export default Card;
