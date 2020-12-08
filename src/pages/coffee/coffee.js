import React, {useEffect} from "react";

import { Container, Row, Col, CardDeck, Card, Button } from "react-bootstrap";
import Cardgroup from "../../components/Cardgroup/Cardgroup"
import Coffeebanner from "../../components/Coffeebanner/Coffeebanner"



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
           <Coffeebanner/>

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
                        <Cardgroup/>
                            
                       
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