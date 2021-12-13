import React from 'react'
import { Container, Form,Row,Button} from 'react-bootstrap'

const Rem = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Form onSubmit={handleSubmit}>
                    <Form.Label>Field</Form.Label>
                    <div></div>
                    <Form.Label>Id</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="Small text" />
                    {/* <input id={`field${id}`} type="number" /> */}
                    <div></div>
                    <Form.Label>Name</Form.Label>
                    <Form.Control size="sm" type="text" placeholder="Small text" />
                    {/* <input id={`field${id}`} type="text" /> */}
                    <div></div>
                    <Form.Label>Qty</Form.Label>
                    <Form.Control size="sm" type="number" placeholder="Small text" />
                    <div></div>

                    <Button variant="primary" type="submit">
                            Submit
                            </Button>
                    </Form>
            </Row>
            
            </Container>
        </div>
    )
}
const handleSubmit = (e) => {
    e.preventDefault();


  };

export default Rem
