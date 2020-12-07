import React, {useEffect} from "react";

import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import CardGroup from "../../components/cardGroup/CardGroup"
import CoffeeBanner from "../../components/coffeeBanner/CoffeeBanner"



const styles = {
    buttonStyle: {
        position: "absolute",
        textAlign: "center"
    }
}

function Coffee() {



    useEffect(() => {
        document.title = "Coffee | Town Coffee Company"
    }, []);


    return (
        <>
           <CoffeeBanner/>

            <Container>
                <br />

                <Row>
                    <Col>
                      <h5>Home &gt; Coffee</h5>
                    </Col>
                </Row>
                <br />

                <Row>
                    <Col>
                        <CardGroup/>
                            
                       
                    </Col>
                </Row>

                <br />
                <br />
                <br />
                <br />
            </Container>
        </>
    )
}

export default Coffee;