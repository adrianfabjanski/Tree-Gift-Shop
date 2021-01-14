import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Twitter } from 'react-bootstrap-icons';
import './Footer.css'

function Footer(){

    return(
        <div>
        <hr/>
        <Container className="Footer">
            <Row className="heading">
                <Col xs={12} md={4} lg={4}>
                    <h5>Helpful Links</h5>
                </Col>

                <Col xs={12} md={4} lg={4}>
                    <h5>Contact info</h5>
                </Col>

                <Col xs={12} md={4} lg={4}>
                    <h5>Sign Up Now</h5>
                </Col>

            </Row>
            <Row>
                <Col xs={6} md={2} lg={2} className="links">
                    <p><a href="#faq">Help & FAQ</a></p>
                    <p><a href="#impressum">Impressum</a></p>  
                    <p><a href="#aboutus">About us</a></p> 
                </Col>
                <Col xs={6} md={2} lg={2} className="links">
                    <p><a href="#agb">AGB</a></p>
                    <p><a href="#somelink">Some Link</a></p>
                    <p><a href="#somelink">Some Link</a></p>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    <p>CO2 - Treeduce GmBH</p>
                    <p>Example Street 123/4</p>
                    <p>1234 Vienna / Austria</p>
                </Col>
                <Col xs={12} md={4} lg={4}>
                    
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>

                        <Button block variant="primary" type="submit">
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>

        </Container>
        <hr/>
        <Container>
            <Row>
                <Col xs={6} md={6} lg={6}>
                    <p>&copy; 2021</p>
                </Col>
                <Col xs={6} md={6} lg={6} className="iconsFooter">
                <a href="https://www.facebook.com/Beautiful-trees-495046020549539/"><Facebook className="iconFooter"/></a>
                <a href="https://www.instagram.com/explore/tags/tree/?hl=de"><Instagram className="iconFooter"/></a>
                <a href="https://twitter.com/treesftf?lang=de"><Twitter className="iconFooter"/></a>
                </Col>
            </Row>
        </Container>
        </div>
        
    );
};

export default Footer;