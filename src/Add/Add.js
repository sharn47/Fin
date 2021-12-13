import React from 'react'
import {  Row, Container,Button,Form } from 'react-bootstrap'

const Add = () => {
    const [inputfieldsToAdd, setInputfieldsToAdd] = React.useState(1);
    const [committedFieldsToAdd, setCommittedFieldsToAdd] = React.useState(0);
  
    
    return (
        <Container>
            <Row>
            <div>
            <div>
      <div>
        <label>Number of fields to add</label>
        <input
          type="number"
          value={inputfieldsToAdd}
          onChange={(e) =>
            setInputfieldsToAdd(parseInt(e.currentTarget.value, 10))
          }
        />
      </div>
      <Button
        onClick={() => {
          setCommittedFieldsToAdd(inputfieldsToAdd);
        }}
      >
        Add fields
      </Button>
      {/* {fields} */}
      
    </div>
        </div>

        </Row>
        <Row>
            <Form onSubmit={handleSubmit}>
                        {[...Array(committedFieldsToAdd)].map(
                    (value: undefined, index: number) => (
                    <Field id={index + 1} key={index}  />
                    )
                     )}
     
                    <Button variant="primary" type="submit">
                            Submit
                            </Button>
            </Form>
       

        </Row>

        </Container>
        
    )
}

const Field = ({ id }: { id: number }) => (
    <div>
        
        <Form.Label htmlFor={`field${id}`}>Field: {id}</Form.Label>
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
     
        
      
     
    </div>
  );
  const handleSubmit = (e) => {
    e.preventDefault();


  };
  
export default Add
