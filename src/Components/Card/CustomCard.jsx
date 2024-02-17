import React, { Component } from 'react'
import { Card, CardBody, CardText, Stack } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import '../Color.css';
import '../Font.css';
import './Card-Responsive.css'

export default class customCard extends Component {
  render() {
    return (
      <div className='mt-5 d-flex mx-5 mb-4 scroll-card'>

      <>
        <Stack direction="horizontal" gap={5}>
        <Card className='bg-card txt-poppins-medium' 
        style={{ width: '255px', height:'352px', fontSize:'12px',textAlign:'justify',position:'relative',overflow:'visible',borderRadius:'30px' }}
        >
        <Image src={`${process.env.PUBLIC_URL}Image-Assets/cow_face.png`} width={95} height={95} alt="sapi" roundedCircle style={{position:'absolute', top:'-47px',left:'50%', transform:'translateX(-50%)'}}/>
          <CardBody style={{paddingTop: '60px'}}>
            <CardText className='mt-3 px-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardText>
          </CardBody>
        </Card>

        <Card className='bg-card txt-poppins-medium card' 
        style={{ width: '255px', height:'352px', fontSize:'12px',textAlign:'justify',position:'relative',overflow:'visible',borderRadius:'30px' }}
        >
        <Image src={`${process.env.PUBLIC_URL}Image-Assets/chiken.png`} width={95} height={95} alt="ayam" roundedCircle style={{position:'absolute', top:'-47px',left:'50%', transform:'translateX(-50%)'}}/>
          <CardBody style={{paddingTop: '60px'}}>
            <CardText className='mt-3 px-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardText>
          </CardBody>
        </Card>

        <Card className='bg-card txt-poppins-medium card' 
        style={{ width: '255px', height:'352px', fontSize:'12px',textAlign:'justify',position:'relative',overflow:'visible',borderRadius:'30px' }}
        >
        <Image src={`${process.env.PUBLIC_URL}Image-Assets/goat.png`} width={95} height={95} alt="kambing" roundedCircle style={{position:'absolute', top:'-47px',left:'50%', transform:'translateX(-50%)'}}/>
          <CardBody style={{paddingTop: '60px'}}>
            <CardText className='mt-3 px-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardText>
          </CardBody>
        </Card>

        <Card className='bg-card txt-poppins-medium card' 
        style={{ width: '255px', height:'352px', fontSize:'12px',textAlign:'justify',position:'relative',overflow:'visible',borderRadius:'30px' }}
        >
        <Image src={`${process.env.PUBLIC_URL}Image-Assets/pig.png`} width={95} height={95} alt="babi" roundedCircle style={{position:'absolute', top:'-47px',left:'50%', transform:'translateX(-50%)'}}/>
          <CardBody style={{paddingTop: '60px'}}>
            <CardText className='mt-3 px-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardText>
          </CardBody>
        </Card>
        </Stack>
      </>
      </div>
    )
  }
}
