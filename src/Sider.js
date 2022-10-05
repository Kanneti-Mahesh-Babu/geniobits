import React from 'react'
import logo from './images/logo.png';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './App.css';

export default function Sider() {
  return (
    <>
    <div>
        <div  className='sider'>
            <img src={logo} style={{width:"110px",height:"100px",marginLeft:"40px"}}/>
        

        <ListGroup style={{textAlign:"justify",fontWeight:"bold",fontSize:"13px",fontFamily:"sans-serif",marginTop:"30px"}}>
           <ListGroupItem  style={{marginBottom:"10px",marginTop:"-10px",borderLeft:"5px solid orangered",color:"orangered",boxShadow:"1px 1px 2px lightgrey"}}> <GridViewIcon/>&nbsp;&nbsp;  My Apps </ListGroupItem>
            <ListGroupItem className='list'> <GroupIcon/>&nbsp;&nbsp; Resources </ListGroupItem>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <ListGroupItem className='list'> <HomeIcon/>&nbsp;&nbsp; My Organisation </ListGroupItem>
            <ListGroupItem className='list'> <SettingsIcon/>&nbsp;&nbsp; Settings </ListGroupItem>
            <ListGroupItem className='list'> <LogoutIcon/>&nbsp;&nbsp; Logout </ListGroupItem>
        </ListGroup>

        </div>
    </div>
    </>
  )
}
