import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import './Color.css';
import './Font.css';
import './Hover.css';

export default class CstmbButton extends Component {
  render() {
    return (
        <>
        <Button className='mt-2 px-3 py-2 btn-outline' variant='btn' style={{borderRadius:'27px'}}>
            <div className="txt-button">Hubungi Kami</div>
        </Button>
        </>
    )
  }
}
