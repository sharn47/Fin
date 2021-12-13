import "./Home.css"
import {  Row, Container,Navbar,Nav } from 'react-bootstrap'
import React, { useState } from 'react'


const Home = () => {
    // const [newNo, setnewNo] = useState()
    // const [Loading, setLoading] = useState(false)

    return (
        <div className="main">

            <Container>
                <Row>
                    <Navbar bg="light" expand="lg">
                        <Container>

                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/Add">Add Products</Nav.Link>
                                    <Nav.Link href="/List">List Products</Nav.Link>
                                    <Nav.Link href="/Rem">Remove Products</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Row>
            </Container>

        </div>


    );
}

export default Home
