import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';


// DeSstep2
function ContactCard({ data }) {
    return (
        <Container>
            <Row>
                {  /* DeSstep3 */
                    data.map(i => (
                        <Col xs={12} sm={6} md={4} lg={3} xl={3} className='mt-5'>
                            {/* BRDstep4 */}
                            <Link to={`contactView/${i.id}`} style={{textDecoration:'none'}}>
                                <Card >
                                    <Card.Img variant="top" src={i.profile} style={{ height: '300px', width: "100%" }} />
                                    <Card.Body>
                                        <Card.Title>Name: {i.username}</Card.Title>
                                        <Card.Title>Place: {i.place}</Card.Title>
                                        <Card.Title>Moblie Number: {i.mobile}</Card.Title>
                                        {/* <Card.Text>
                                            Adress: {i.address}
                                        </Card.Text> */}
                                        {/* <ListGroup>
                                            <ListGroup.Item>Place: {i.place}</ListGroup.Item>
                                            <ListGroup.Item>Moblie Number: {i.mobile}</ListGroup.Item>
                                            <ListGroup.Item>Email: {i.email}</ListGroup.Item>
                                        </ListGroup> */}
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default ContactCard