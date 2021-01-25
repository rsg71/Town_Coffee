import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./NoMatch.css"


export default function NoMatch() {
    return (
        <>
            <Container id="NoMatchContainer">
                <Row id="NoMatchPageRow">
                    <Col >
                        <h1>Error 404 Page Not Found</h1>
                        <h1>
                            <span role="img" aria-label="Face With Rolling Eyes Emoji">
                                🙄
                            </span>

                        </h1>
                        <br/>
                        <span id="NoMatchReturnHome"><Link to="/">  Return Home</Link></span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
