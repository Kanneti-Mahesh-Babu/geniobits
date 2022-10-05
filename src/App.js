import React from 'react'
import { useState,useEffect } from 'react';
import Header from './Header'
import Sider from './Sider'
import Filter from './Filter'
import Button from 'react-bootstrap/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './App.css';

function App() {

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
    
<div style={{background:"#D6EAF8", height:"auto"}}>
    <Header/>
    <Sider/>


            {/*-----FILTER------*/}
            
   <div className="float-end">
        <h4 style={{position:"relative",right:"1000px",top:"35px",fontSize:"20px"}}> <KeyboardBackspaceIcon/> Century &gt; <span style={{color:"#2AAA8A"}}> Divisions </span> </h4>
    <Button variant="primary" className='filter' onClick={() => setModalShow(true)} style={{fontSize:"14px",backgroundColor:"orangered",border:"none",fontFamily:"sans-serif",color:"white",marginBottom:"15px"}}>
               +  Add New Division 
      </Button>

      <Filter
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>


</div>
    </>
  );
}

export default App;