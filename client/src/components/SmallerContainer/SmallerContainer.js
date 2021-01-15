import React from 'react'
import { Container } from 'react-bootstrap';
import "./SmallerContainer.css"

export default function SmallerContainer(props) {
    return (
        <>
            <Container id="smallerContainer">
                {props.children}
            </Container>
        </>
    )
}
