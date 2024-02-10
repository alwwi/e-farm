import React, { useState } from 'react'
import { Navbar, Container, Nav, Modal,NavDropdown } from 'react-bootstrap'
import './Color.css';
import './Font.css';
import './Hover.css';
import Login from '../Pages/Login';

function CustomNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

    return (
      <>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Body style={{border: '7px solid #DBAE84', borderRadius: '8px', padding:'50px'}}>
          <Login />
        </Modal.Body>
      </Modal>

      <div>
        <Navbar className='bg-color custom-navbar' style={{borderBottom: '6px solid #DBAE84', height:'66px'}}>
        <Container>
          <Navbar.Brand className='txt-brand' href="#home">e-Farm</Navbar.Brand> {/* Nama brand sekaligus button untuk kembali ke dashboard*/}
          <Nav className="me-1">
            <NavDropdown
            title={<span className='txt-poppins-bold' style={{color:'#DBAE84',fontSize:'16.67px'}}>Produk</span>}
            className='txt-underline txt-poppins-medium mx-3 custom-menu-variant bro'
            >
              <NavDropdown.Item href="#action/3.1">Pakan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Vitamin</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pengelolaan</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='txt-underline txt-poppins-bold mx-3' style={{fontSize:'16.67px'}}>Features</Nav.Link>
            <Nav.Link className='txt-underline txt-poppins-bold mx-3' style={{fontSize:'16.67px'}}>Solution</Nav.Link>
            <Nav.Link className='txt-underline txt-poppins-bold mx-3' style={{fontSize:'16.67px'}}>Blog</Nav.Link>
            <Nav.Link onClick={handleShow} className='txt-underline txt-poppins-bold d-flex align-items-center' style={{fontSize:'16.67px'}} >
                    {/* menampilkan icon untuk login */}
                <img
                alt=''
                src={`${process.env.PUBLIC_URL}Image-Assets/svg/account-icon.svg`}
                width="14"
                height="14"
                className='mx-2'
                />Login</Nav.Link> {/* text Login */}
          </Nav>
        </Container>
      </Navbar>
      </div>
    </>
    )
}

export default CustomNavbar;