import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function contacUs() {
    return (
        <>
            <Container>
                <h1>-----Contact Us-------</h1>

                <h2>Town Coffee Company</h2>
                <p>215 - 696 - 9338</p>
                <p>towncoffeecompany@gmail.com</p>

                <h2>Follow us:</h2>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Whatsapp</li>
                </ul>

                <h2>Located:</h2>

                <p>1300 Bethlehem Pike 2-3</p>
                <p>Flourtown, Pennsylvania</p>
                <p>19031</p>

                <h2>Get on the list!</h2>
                <p>Join our mailing list for special product announcements, news and offers</p>
                <Button>Your email</Button>
                <Button>Sign Up</Button>
            </Container>
        </>
    )
}

export default contacUs;