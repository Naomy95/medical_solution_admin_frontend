// components/Card.js
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card2 = ({ title, img1, img2,number, percentage1 ,percentage2,Statistic, redDown,title1 ,greenUp, title2}) => {
  return (
  <div className='rounded-md border shadow-md  p-4'>
   
        <div   className='grid grid-cols-2 '>
      <div>
      <img style={{width:"20px", height:"20px", }}src={img1} alt="" /> 
        <p>{title1}</p>
      </div>
       <div>
       <img style={{width:"20px", height:"20px", }}src={img2} alt="" />
        <p>{title2}</p>
       </div>
      
    
        
    </div>
    <div className='mt-4'>
        <img src={Statistic} alt="" />
    </div>
    <div className='flex mt-2 gap-4 ml-2 font-poppins text-sm text-gray-600'>
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
