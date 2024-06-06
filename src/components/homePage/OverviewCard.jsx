// components/Card.js
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const CardOv = ({ title, img1, img2,number, percentage1 ,percentage2,greenUp, redDown}) => {
  return (
  <div className='rounded-md border border-gray-200 p-6 h-40 shadow-md'>
    <div className='flex justify-center'>
    <img style={{width:"70px", height:"50px", }} src={img1} alt="" /> 
    </div>
    <div>
        <p className='text-center  text-gray-700 font-sans font-semibold mt-4'>{number}</p>
    </div>
    <div >
        
       <p className='text-center text-gray-700 font-sans font-semibold mt-2'>{title}</p>
    </div>


  </div>
  );
}

export default CardOv;
