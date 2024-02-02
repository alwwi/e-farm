import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Color.css';
import './Font.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <Navbar data-bs-theme="dark" className='bg-color' style={{borderBottom: '6px solid #DBAE84', height:'66px'}}>
        <Container>
          <Navbar.Brand className='txt-brand' href="#home">e-Farm</Navbar.Brand> {/* Nama brand sekaligus button untuk kembali ke dashboard*/}
          <Nav className="me-1">
            <Nav.Link className='txt-color txt-navbar mx-3' href="#home">Product</Nav.Link>
            <Nav.Link className='txt-color txt-navbar mx-3' href="#features">Features</Nav.Link>
            <Nav.Link className='txt-color txt-navbar mx-3' href="#solution">Solution</Nav.Link>
            <Nav.Link className='txt-color txt-navbar mx-3' href="#blog">Blog</Nav.Link>
                <Nav.Link className='txt-color txt-navbar d-flex align-items-center' href="#pricing">
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
