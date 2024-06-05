// components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, Settings, CalendarToday, Payment, ExitToApp, Delete } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button>
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Doctors" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Nurses" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Patients" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Settings /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><CalendarToday /></ListItemIcon>
          <ListItemText primary="Appointment" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><Payment /></ListItemIcon>
          <ListItemText primary="Payment" />
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
