import Icon from '@mui/material/Icon';
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button'; 
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './App.css'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';






const Filter=(props)=>{

  // useEffect(()=>{
  //   fetch('https://633bf67174afaef164fea695.mockapi.io/users').then(
  //     resp=>resp.json()).then(
  //       res=>setEmp(res)
  //     )
  // },[])


 //---
 const [user,setUser] = useState({
  divisionName:'',
  incharge:'',
  inchargeMail:'',
  employees:''
})

const [emp,setEmp] = useState([]);



const handleChange = (e)=>{
  setUser({...user,[e.target.name]:e.target.value});
}

const submitHandler = (e)=>{
   setEmp(user);
   appended();
}
const {divisionName,incharge,inchargeMail,employees} = user;
//---





    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



  const appended = ()=>{
    const node= document.createElement("div")
    const node5= document.createElement("br")
    const textnode= document.createTextNode(`${divisionName}`);
    node.appendChild(textnode);
    node.appendChild(node5);
    document.getElementById("display1").appendChild(node).style.backgroundColor='#2AAA8A';

    //----
    const node1= document.createElement("p")
    const textnode1= document.createTextNode(`Incharge: ${incharge} `);
    const textnode2= document.createTextNode(`E-mail ID: ${inchargeMail} `);
    const textnode3= document.createTextNode(`Total Employees: ${employees}`);
    node1.appendChild(textnode1);
    
    node1.appendChild(textnode2);
    
    node1.appendChild(textnode3);
    document.getElementById("display1").appendChild(node1).style.backgroundColor='white';


      
  }
  
  return (
    <>

  <div className='ground'>
    
            <Modal
                  {...props}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{fontSize:"16px"}}>
                      Add New Division
                    </Modal.Title>
                  </Modal.Header>
<Modal.Body>
                    
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Text className="text-muted">
          Division Name </Form.Text>
        <Form.Control type="text" placeholder="Department Name" style={{backgroundColor:"#D6EAF8"}}/>
        </Form.Group>

        <Form.Text className="text-muted">
          Incharge </Form.Text>
        <Form.Group>
        <Form.Select  style={{backgroundColor:"#D6EAF8",width:"230px"}}>
          <option>Search by location... </option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Text className="text-muted">
          Incharge E-mail ID </Form.Text>
        <Form.Control type="text" placeholder="Enter E-mail ID" style={{backgroundColor:"#D6EAF8"}}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
      <Form.Text className="text-muted">
          Total Employees Working </Form.Text>
        <Form.Control type="text" style={{backgroundColor:"#D6EAF8"}}/>
        </Form.Group> */}
      <Row className="mb-3">
        <Col xs={7}>
          <Form.Text className="text-muted" style={{fontSize:"12px"}}> Division Name </Form.Text>
          <Form.Control type="text" name='divisionName' value={divisionName}  onChange={handleChange} placeholder="Department Name" style={{backgroundColor:"#D6EAF8",width:"435px"}}/>
        </Col>
      </Row>
      <Row>
        <Col xs={7}>
          <Form.Text className="text-muted" style={{fontSize:"12px"}}> Incharge </Form.Text>
          <Form.Control type="text" name='incharge' value={incharge} onChange={handleChange} placeholder="Department Lead"  style={{backgroundColor:"#D6EAF8"}} />
        </Col>
        <Col>
          <Form.Text className="text-muted" style={{fontSize:"12px"}}> Incharge E-mail ID </Form.Text>
          <Form.Control type="email" name='inchargeMail' value={inchargeMail} onChange={handleChange} placeholder="Enter E-mail ID" style={{backgroundColor:"#D6EAF8"}} />
        </Col>
        <Col>
          <Form.Text className="text-muted" style={{fontSize:"12px"}}> Total Employees Working </Form.Text>
          <Form.Control type="number" name='employees' value={employees} onChange={handleChange} style={{backgroundColor:"#D6EAF8"}} />
        </Col>
      </Row>


    </Form>
</Modal.Body>
                  <Modal.Footer>
                    Cancel
                    <Button onClick={()=>{props.onHide();submitHandler();}} style={{width:"150px",marginLeft:"20px",backgroundColor:"orangered",border:"none"}}>Add</Button>
                  </Modal.Footer>
                </Modal>













    <Card style={{border:"none"}}>
      <Card.Header style={{fontWeight:"bold",fontFamily:"sans-serif",fontSize:"14px",backgroundColor:"white",padding:"15px"}}> Filters </Card.Header>
      <Card.Body>
        <Card.Title style={{fontWeight:"bold",fontFamily:"sans-serif",fontSize:"10px",color:"grey"}}> By Location </Card.Title>
        <Form.Group className="mb-3">
        <Form.Select className="search">
          <option>Search by location... </option>
        </Form.Select>
      </Form.Group>
        <Button variant="warning" style={{marginTop:"30px",color:"white",fontFamily:"sans-serif", width:"150px",marginLeft:"50px"}}>Apply</Button>
      </Card.Body>
    </Card>








                {/*----LOOP-------------*/}

  
   {/* <Card className='loop' style={{width:"250px",height:"130px",border:"none"}}>
      <Card.Header style={{backgroundColor:"#2AAA8A",fontFamily:"sans-serif",color:"white",fontSize:"14px"}}> Cake Division  <MoreHorizIcon style={{float:"right",fontSize:"20px"}}/></Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",marginTop:"-5px"}}>
              Incharge: Manohar Patnak {' '}</p>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",marginTop:"-10px"}}> E-mail ID: manoharpatnak@gmail.com {' '} </p>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",marginTop:"-10px"}}> Total Employees: 10 {' '} </p>
        </blockquote>
      </Card.Body>
    </Card> */}
  
                



 <div  style={{position:"relative",right:"950px",bottom:"230px",width:"250px",border:"none"}}>
            <div style={{marginTop:"35px",backgroundColor:"#2AAA8A",border:"none",fontFamily:"sans-serif",color:"white",fontSize:"14px",padding:"10px"}}> Cake Division  </div>
              <div className="column" style={{backgroundColor:"white",padding:"12px",border:"none"}}>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold"}}> Incharge: Manohar Patnak </p>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",marginTop:"-10px"}}> E-mail ID: manoharpatnak@gmail </p>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",marginTop:"-10px"}}> Total Employees: 10 </p>
             </div>
      </div> 

      <div  style={{position:"relative",right:"950px",bottom:"230px",width:"250px",border:"none"}}>
            <div style={{marginTop:"35px",backgroundColor:"#2AAA8A",border:"none",fontFamily:"sans-serif",color:"white",fontSize:"14px",padding:"10px"}}> Cake Division  </div>
              <div className="column" style={{backgroundColor:"white",padding:"12px",border:"none"}}>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold"}}> Incharge: Manohar Patnak </p>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",marginTop:"-10px"}}> E-mail ID: manoharpatnak@gmail </p>
          <p style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",marginTop:"-10px"}}> Total Employees: 10 </p>
             </div>
      </div> 




<div style={{display:"inline-block",height:"150px",width:"525px",position:"relative",right:"950px",bottom:"220px"}} class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
  <span id='display1' style={{fontFamily:"sans-serif",fontSize:"11px",fontWeight:"bold",color:"black"}}>
    </span>
  </div>
</div>



    </div>

    </>
  )
}


export default Filter;
