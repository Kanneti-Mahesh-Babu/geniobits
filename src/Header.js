import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import './App.css'

export default function Header() {
  return (
    <>
        <div className='header'>
        <h4> My Apps &gt; Client &gt; <span> Sites </span> </h4>

        <div>
        <ListGroup className="d-flex flex-row-reverse">
           <ListGroupItem className="p-2" > <PermIdentityIcon/></ListGroupItem>
           <ListGroupItem className="p-2" variant='dot'> <NotificationsNoneIcon/></ListGroupItem>
        </ListGroup>
       </div>




        </div>
    </>
  )
}
