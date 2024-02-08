import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Color.css';
import './Font.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar data-bs-theme="dark" className='bg-color custom-navbar' style={{borderBottom: '6px solid #DBAE84', height:'66px'}}>
        <Container>
          <Navbar.Brand className='txt-brand' href="#home">e-Farm</Navbar.Brand> {/* Nama brand sekaligus button untuk kembali ke dashboard*/}
          <Nav className="me-1">
            <Nav.Link className='txt-underline txt-poppins-bold mx-3' href="#features" style={{fontSize:'16.67px'}}>Features</Nav.Link>
            <Nav.Link className='txt-underline txt-poppins-bold mx-3' href="#home" style={{fontSize:'16.67px'}}>Product</Nav.Link>
            <Nav.Link className='txt-underline txt-poppins-bold mx-3' href="#solution" style={{fontSize:'16.67px'}}>Solution</Nav.Link>
            <Nav.Link className='txt-underline txt-poppins-bold mx-3' href="#blog" style={{fontSize:'16.67px'}}>Blog</Nav.Link>
                <Nav.Link className='txt-underline txt-poppins-bold d-flex align-items-center' href="#pricing" style={{fontSize:'16.67px'}} >
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
    )
  }
}
