import React, { useState } from 'react'
import { Navbar, Container, Nav, Modal, NavDropdown, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Color.css';
import '../Font.css';
import '../Hover.css';
import './Navbar-responsive.css';
import { useAuth } from '../../ConnectToDB/AuthContext';
import Login from '../../Pages/Login';

function CustomNavbar() {
  const [show, setShow] = useState(false); // state untuk menampilkan modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { currentUser, logoutUser } = useAuth();

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      {/* modal digunakan untuk menampilkan pop up untuk halaman login */}
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Body style={{ border: '7px solid #DBAE84', borderRadius: '8px', padding: '50px' }}>
          <Login />
        </Modal.Body>
      </Modal>

      <div>
        <Container>
          <Row>
            <Navbar className='bg-color custom-navbar' fixed='top' style={{ borderBottom: '6px solid #DBAE84', height: '66px' }}>

              <Col sm={4} className='d-flex justify-content-center header'>

                <Navbar.Brand className='txt-brand'>e-Farm</Navbar.Brand> {/* Nama brand sekaligus button untuk kembali ke dashboard*/}
                <div className='menu-icons' onClick={handleClick}>
                  <i className={clicked ? 'bi bi-x-lg' : 'bi bi-list'}>

                  </i>

                </div>
              </Col>

              <Col sm={9} className='d-flex justify-content-center'>
                

                <Nav className={clicked ? "nav-menu active" : "nav-menu"}>

                  <Nav.Link className='d-flex txt-underline txt-poppins-medium mx-3 py-1 px-0 custom-menu-variant nav-link'>
                    <NavDropdown
                      title={<span className='txt-poppins-bold' style={{ color: '#DBAE84', fontSize: '16.67px' }}>Produk</span>}
                      className=''
                    >
                      <NavDropdown.Item as={Link} to='/pakan' className='dropdown-item' >Pakan</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/shop' className='dropdown-item' >Vitamin</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to='/pengolahan' className='dropdown-item' >Pengelolaan</NavDropdown.Item>
                    </NavDropdown>
                  </Nav.Link>
                  <Nav.Link className='nav-link d-flex txt-underline txt-poppins-bold mx-3 mt-1' style={{ fontSize: '16.67px' }}>Features</Nav.Link>
                  <Nav.Link className='nav-link d-flex txt-underline txt-poppins-bold mx-3 mt-1' style={{ fontSize: '16.67px' }}>Solution</Nav.Link>
                  <Nav.Link className='nav-link d-flex txt-underline txt-poppins-bold mx-3 mt-1' style={{ fontSize: '16.67px' }}>Blog</Nav.Link>

                  {currentUser ? (
                    <>
                      <Nav.Link className='d-flex txt-poppins-medium mx-3 py-0 px-0 custom-menu-variant nav-link'>

                        <NavDropdown
                          title={<span className='txt-poppins-bold' style={{ color: '#DBAE84', fontSize: '16.67px' }}>
                            <img
                              alt=''
                              src={`${process.env.PUBLIC_URL}Image-Assets/svg/account-icon.svg`}
                              width="14"
                              height="14"
                              className='mx-2'
                            />{currentUser.username}</span>}
                          className=' d-flex align-items-center'
                        >
                          <NavDropdown.Item onClick={logoutUser} className='dropdown-item'>Logout</NavDropdown.Item>
                        </NavDropdown>
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link onClick={handleShow} className='nav-link mx-3 txt-underline txt-poppins-bold d-flex align-items-center' style={{ fontSize: '16.67px' }} >
                      {/* menampilkan icon untuk login */}
                      <img
                        alt=''
                        src={`${process.env.PUBLIC_URL}Image-Assets/svg/account-icon.svg`}
                        width="14"
                        height="14"
                        className='mx-2'
                      />Login</Nav.Link>
                  )}

                </Nav>
                

              </Col>
            </Navbar>
          </Row>
        </Container>
      </div>
    </>
  )
}


export default CustomNavbar;