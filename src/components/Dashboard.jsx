// components/Dashboard.jsx
import React from 'react';
import Card from './homePage/Cards';
import { People, LocalHospital, Healing, EventNote } from '@mui/icons-material';
import person from "../assets/images/person.png";
import vector1 from "../assets/images/Vector1.png";
import person2 from "../assets/images/person2.png";
import vector2 from "../assets/images/Vector2.png";
import green from "../assets/images/Green.png";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <Card title="Total Doctors" img1={person} img2={vector1} value="500+" greenUp={green} number="500+" percentage1="95%" percentage2="25%" icon={<LocalHospital />} />
        <Card title="Total Patients" img1={person2} img2={vector2} number="500+" percentage1="95%" percentage2="25%" value="800+" icon={<People />} />
        <Card title="Surgeries Today" value="100" icon={<Healing />} />
        <Card title="New Appointments" value="150" icon={<EventNote />} />
        <Card title="Total Nurses" value="900" icon={<People />} />
        <Card title="Daily Surgeries" value="50" icon={<Healing />} />
      </div>
    </div>
  );
}

export default Dashboard;
