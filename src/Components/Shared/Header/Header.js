import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logoImg from '../../../Images/logo.svg';
const Header = () => {
    return (
        <header>
            <div>
                <header className='header-top bg-dark'>
                    <Container>
                        <Row>
                            <Col md={6} sm={12} className='d-flex' >
                                <div className='phone me-5 p-1'>
                                    <p className='text-white'>+880 1234 567890</p>
                                </div>
                                <div className='search ms-5 p-1'>
                                    <p className='text-white'>search</p>
                                </div>
                            </Col>
                            <Col md={6} sm={12} className='float-end'>
                                <a href='/' className='mt-1 float-end'>
                                    <Button className='m-1' variant="light">log in</Button>
                                </a>
                                <a href='/' className='mt-1 float-end'>
                                    <Button className='m-1' variant="warning">Register</Button>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </header>
                <header className='header-main bg-light border-bottom-1 border-secondary'>
                    <Container>
                        <Row>
                            <Col md={3} sm={6}>
                                <img className="w-25" src={logoImg} alt="" />
                            </Col>
                            <Col md={9} sm={6}></Col>
                        </Row>
                    </Container>
                    
                </header>
            </div>
        </header>
    );
};

export default Header;