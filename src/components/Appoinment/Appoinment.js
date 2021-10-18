import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const Appoinment = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div className="container">
            <h1 className="my-5" >Request an Appointment</h1>
            <hr />
            <h5>Please use the form below to request a dental appointment. We will contact you soon to confirm the availability.</h5>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="Enter FirstName" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="Enter LastName" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Male</option>
                    <option>Female</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Phone</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>City</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Chittagong</option>
                    <option>Dhaka</option>
                    <option>Sylhet</option>
                    <option>Khulna</option>
                    <option>Barishal</option>
                    <option>Rajshahi</option>
                </Form.Select>
                </Form.Group>


            </Row>
            <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Is this a Regular Checkup?</Form.Label>
                <Form.Select defaultValue="Yes">
                    <option>Yes</option>
                    <option>No</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Specific Problem</Form.Label>
                <Form.Select defaultValue="Specific Problem">
                    <option>Gum Problem</option>
                    <option>Broken Tooth</option>
                    <option>Orthodonics Issues</option>
                    <option>Others</option>
                </Form.Select>
                </Form.Group>
            </Row>

            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    );
};

export default Appoinment;