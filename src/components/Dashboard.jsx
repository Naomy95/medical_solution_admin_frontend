// components/Dashboard.jsx
import React from 'react';
import Card from './homePage/Cards';
import Card2 from './homePage/Card2';
import { People, LocalHospital, Healing, EventNote, Circle } from '@mui/icons-material';
import person from "../assets/images/person.png";
import vector1 from "../assets/images/Vector1.png";
import person2 from "../assets/images/person2.png";
import vector2 from "../assets/images/Vector2.png";
import green from "../assets/images/Green.png";
import red from "../assets/images/Red.png";
import circle1 from "../assets/images/CircleG.png";
import circle2 from "../assets/images/CircleB.png";
import stat from "../assets/images/Stat.png";
import stat1 from "../assets/images/Group 7.png"
import stat2 from "../assets/images/Group 8.png"
import income from "../assets/images/Income.png"
import outcome from "../assets/images/Outcome.png"
import CardOv from "./homePage/OverviewCard";
import bed from "../assets/images/bed.png"
import person3 from "../assets/images/person3.png"
import person4 from "../assets/images/person4.png"
import hand from "../assets/images/hand.png"
import stat3 from "../assets/images/Group 22.png"
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <Card title="Total Doctors" img1={person} img2={vector1} value="500+" greenUp={green}  number="500+" percentage1="95%" redDown={red} percentage2="25%" icon={<LocalHospital />} />
        <Card title="Total Patients" img1={person2} img2={vector2} greenUp={green} number="500+" percentage1="95%"redDown={red}  percentage2="25%" value="800+" icon={<People />} />
        <Card2 title="Surgeries Today" img1={circle1} title1="Doctors" img2={circle2} title2="Patients" Statistic={stat} value="100" icon={<Healing />} />
        <div className='rounded-md border border-sky-500 p-8  '>
          <div className='flex '>
          <img src={income} alt="" />
          <img src={outcome} alt="" />
          </div>
        
          <div className='flex'>
          <img src={stat1} alt="" />
          <img src={stat2} alt="" />
          
        </div>
          
        
          
        </div>
      </div>
      <div className>
        <p>Hospital Overview</p>
      </div>
      <div className='flex'>
      <div className='mt-40 flex p-8'>
      <CardOv img1={bed} number="1000" title="Total bed"/>
      <CardOv img1={hand} number="100" title="Daily surgery" />
      <CardOv img1={person3} number="900" title="Total Nurses" />
      <CardOv img1={person4} number="900" title="Total Nurses" />
      </div>
      <CardOv img1={stat3}  />
      </div>
    </div>
  );
}

export default Dashboard;
