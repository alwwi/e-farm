import React from 'react'
import CustomNavbar from '../Components/Navbar/CustomNavbar'
import CustomCard from '../Components/Card/CustomCard'
import '../Components/Color.css';
import '../Components/Font.css';
import '../Components/Hover.css';
import BtnFill from '../Components/BtnFill';
import BtnOutline from '../Components/BtnOutline';
import { Container, Row, Col, Image, Button, Stack } from 'react-bootstrap';
import Footer from '../Components/Footer';
import './Responsive-Dashboard.css';

const Dashboard = () => {
    return (
        <div className='bg-color' style={{ color: 'white' }}>

            <CustomNavbar />

            <Container className='text-image' style={{ paddingLeft: '50px', paddingRight: '50px',paddingTop:'200px' }}>
                <Row className='column-reverse'>
                    <Col md={6} className='text-start'>
                        <h1 className='txt-poppins-bold' 
                        >Solusi Bagi Anda yang Memiliki Peternakan</h1>
                        <p className='txt-poppins-medium'
                         >
                            e-farm merupakan sebuah website yang membantu para peternak untuk mengelola peternakan dengan bantuan sistem.
                            e-farm memiliki fitur-fitur yang membantu untuk merawat hewan ternak,
                            seperti penjadwalan pemberian pakan dan vitamin kepada hewan ternak.
                        </p>
                        <Button variant='link' className='d-flex align-items-center btn-delete-link'>
                            <p className='txt-color txt-poppins-semiBold my-0' style={{ fontSize: '14px' }}>baca selengkapnya</p>
                            <img src={`${process.env.PUBLIC_URL}Image-Assets/svg/arrow.svg`} alt='' style={{ marginLeft: '5px', width: '13px', height: '13px' }} />
                        </Button>
                    </Col>
                    <Col md={6}>
                        <Image className='img-dashboard' src={`${process.env.PUBLIC_URL}Image-Assets/farmer.jpg`} />
                    </Col>
                </Row>
            </Container>

            <Container 
            style={{ marginTop:'200px' }}
            className='d-flex justify-content-center'
            >
                <h2 className='txt-poppins-semiBold' >
                    Hewan Ternak Apa Saja yang Dapat Dibantu Menggunakan E-Farm Saat Ini ?
                </h2>
            </Container>

            <Container style={{ marginTop: '100px' }}>
                <CustomCard /> {/* memanggil component card */}
            </Container>

            <Container className='text-image tenaga-ahli' 
            style={{paddingLeft: '50px', paddingRight: '50px',paddingTop:'200px' }}
            >
                <Row>
                    <Col md={6}>
                        <Image className='img-dashboard' src={`${process.env.PUBLIC_URL}Image-Assets/tenaga-ahli.jpg`} 
                        />
                    </Col>
                    <Col md={6} className='text-start'>
                        <h1 className='txt-poppins-bold'
                        >Kerjasama para ahli</h1>
                        <p className='txt-poppins-medium'
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <Button variant='link' className='d-flex align-items-center btn-delete-link'>
                            <p className='txt-color txt-poppins-semiBold my-0' style={{ fontSize: '14px' }}>baca selengkapnya</p>
                            <img src={`${process.env.PUBLIC_URL}Image-Assets/svg/arrow.svg`} alt='' style={{ marginLeft: '5px', width: '13px', height: '13px' }} />
                        </Button>
                    </Col>
                </Row>
            </Container>

            <div className='d-flex align-items-center' 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/Image-Assets/ai-background.png)`, backgroundSize: '100% auto', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: '60vw' }}
            >
                <Container className='bg-ai' style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                    <Row className='column-reverse'>
                        <Col md={6} className='text-start'>
                            <h1 className='txt-poppins-bold' 
                            >Menggunakan Bantuan Artificial Intelegence</h1>
                            <p className='txt-poppins-medium' 
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <Button variant='link' className='d-flex align-items-center btn-delete-link'>
                                <p className='txt-color txt-poppins-semiBold my-0' style={{ color: '#023E24', fontSize: '14px' }}>baca selengkapnya</p>
                                <img src={`${process.env.PUBLIC_URL}Image-Assets/svg/arrow-green.svg`} alt='' style={{ marginLeft: '5px', width: '13px', height: '13px' }} />
                            </Button>
                        </Col>
                        <Col md={6}>
                            <Image className='img-ai' src={`${process.env.PUBLIC_URL}Image-Assets/ai-logo.png`} 
                            />
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container className='ads' style={{ border: '8px solid #DBAE84', borderRadius: '200px', width:'78%', marginBottom:'200px'}}>
                <Row className='align-items-center'>
                    <Col md={6} style={{paddingLeft:'120px'}}>
                        <h1 className='txt-poppins-bold' style={{ width: '488px', textAlign: 'left' }}>Siap Untuk Menjadi Bagian Dari Kami?</h1>
                        <div>
                            <Stack direction="horizontal" gap={2}>
                                <BtnFill />
                                <BtnOutline />
                            </Stack>
                        </div>
                    </Col>


                    <Col md={6} className='p-0'>
                        <Image className='img-ai' src={`${process.env.PUBLIC_URL}Image-Assets/farmer2-removebg-preview.png`} style={{borderRadius: '20px', width:'auto'}} />
                    </Col>
                </Row>
            </Container>


            <Footer />
        </div>
    )
}

export default Dashboard
