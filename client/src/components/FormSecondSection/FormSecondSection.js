import React from 'react'
import { Form } from 'react-bootstrap'

export default function FormSecondSection() {
    return (
        <div>
            <h2>How many bags do you need?</h2>

            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        </div>
    )
}
