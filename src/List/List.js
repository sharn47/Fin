import React from 'react'
import { Container,Row,Table } from 'react-bootstrap'

const List = () => {
    return (
        <div>
            <Container>
                <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Prod Id</th>
                        <th>Prod Name</th>
                        <th>Prod Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        
                        </tr>
                    </tbody>
                </Table>
                </Row>
            </Container>
            
        </div>
    )
}

export default List
