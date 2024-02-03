import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Color.css';
import './Font.css';

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer bg-footer py-5" style={{height:'320px'}}>
        <Container>
          <Row className="justify-content-md-center">
          <Col xs={12} md={2} className="text-start  mb-2  my-2">
              <div className="text-wrapper txt-brand-footer" href="#home" >e-Farm</div>
              <div className="txt-medium mt-3">Alamat</div>
            </Col>
            <Col xs={6} md={2} className="text-start  mb-3  my-3">
              <div className="text-wrapper txt-footer" >e-Farm</div>
              <div className="txt-medium mt-2">Home</div>
              <div className="txt-medium">About</div>
            </Col>
            <Col xs={6} md={2} className="text-start mb-3 my-3">
              <div className="text-wrapper txt-footer">Contact</div>
              <div className="txt-medium mt-2">Email</div>
              <div className="txt-medium">Twitter</div>
              <div className="txt-medium">Instagram</div>
              <div className="txt-medium">Number Phone</div>
            </Col>
            <Col xs={6} md={2} className="text-start mb-3 my-3">
              <div className="text-wrapper txt-footer">Company</div>
              <div className="txt-medium mt-2">Carrier</div>
              <div className="txt-medium">Mitra</div>
            </Col>
            <Col xs={6} md={2} className="text-start mb-3 my-3">
              <div className="text-wrapper txt-footer">Help</div>
            </Col>
            <Col xs={6} md={2} className="text-start mb-3 my-3">
              <div className="text-wrapper txt-footer">Solution</div>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
