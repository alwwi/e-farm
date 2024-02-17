import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Color.css';
import './Font.css';
import './Footer-Responsive.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-footer py-5" style={{ height: 'auto', color: 'black' }}>
        <Container className='container-footer'>
          <Row className="justify-content-md-center">
            <Col  className="text-start  mb-2  my-2">
              <div className='footer-section'>
                <div className="text-wrapper txt-poppins-semiBold" href="#home" style={{ fontSize: '22px' }}>e-Farm</div>
                <div className="txt-medium mt-3">Alamat</div>
              </div>
            </Col>
            <Col   className="text-start  mb-3  my-3">
              <div className='footer-section'>
                <div className="text-wrapper txt-poppins-semiBold" style={{ fontSize: '16px' }} >e-Farm</div>
                <div className="txt-poppins-medium mt-2" style={{ fontSize: '16px' }}>Home</div>
                <div className="txt-poppins-medium" style={{ fontSize: '16px' }}>About</div>
              </div>
            </Col>
            <Col   className="text-start mb-3 my-3">
              <div className='footer-section'>
                <div className="text-wrapper txt-poppins-semiBold" style={{ fontSize: '16px' }}>Contact</div>
                <div className="txt-poppins-medium mt-2" style={{ fontSize: '16px' }}>Email</div>
                <div className="txt-poppins-medium" style={{ fontSize: '16px' }}>Twitter</div>
                <div className="txt-poppins-medium" style={{ fontSize: '16px' }}>Instagram</div>
                <div className="txt-poppins-medium" style={{ fontSize: '16px' }}>Number Phone</div>
              </div>
            </Col>
            <Col  className="text-start mb-3 my-3">
              <div className='footer-section'>
                <div className="text-wrapper txt-poppins-semiBold" style={{ fontSize: '16px' }}>Company</div>
                <div className="txt-poppins-medium mt-2" style={{ fontSize: '16px' }}>Carrier</div>
                <div className="txt-poppins-medium" style={{ fontSize: '16px' }}>Mitra</div>
              </div>
            </Col>
            <Col  className="text-start mb-3 my-3">
              <div className='footer-section'>
                <div className="text-wrapper txt-poppins-semiBold" style={{ fontSize: '16px' }}>Help</div>
              </div>
            </Col>
            <Col   className="text-start mb-3 my-3">
              <div className='footer-section'>
                <div className="text-wrapper txt-poppins-semiBold" style={{ fontSize: '16px' }}>Solution</div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
