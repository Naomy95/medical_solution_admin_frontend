// components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, Settings, CalendarToday, Payment, ExitToApp, Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate =useNavigate()
  return (
    <div className="sidebar">
      <List>
        <ListItem button>
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText onClick={()=>{navigate('/dashboard')}} primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText onClick={()=>{navigate('/doctors')}} primary="Doctors" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText onClick={()=>{navigate('/nurses')}} primary="Nurses" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItem>
        
        <ListItem button>
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary="Appointment" />
        </ListItem>
      
        <ListItem button>
          <ListItemIcon><ExitToApp /></ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Delete /></ListItemIcon>
          <ListItemText primary="Delete Profile" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
