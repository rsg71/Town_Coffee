import React, { useState } from "react"
import { Container, Row, Col, Button } from 'react-bootstrap'
import FormFirstSection from "../../components/FormFirstSection/FormFirstSection"
import FormSecondSection from "../../components/FormSecondSection/FormSecondSection"
import "./SubscriptionForm.css"

export default function SubscriptionForm() {
    const [formState, setFormState] = useState()
    const [currentFormStep, setCurrentFormStep] = useState({
        first: true,
        second: false
    })
    const [selection, setSelection] = useState({

    })


    const whichStep = () => {
        if (currentFormStep.first) {
            console.log('on first step')
            setCurrentFormStep({
                first: false,
                second: true
            })
        } else {
            console.log('on second step')
            setCurrentFormStep({
                first: true,
                second: false
            })
        }
    }



    return (
        <>
            <Container>

                <Row className="subscriptionProgressRow">
                    <Col className="subscriptionStepIcon">
                        <Button className="subscriptionStepButton"><h2>
                            {currentFormStep.first? 1: <i class="fas fa-check-circle"></i>}
                            </h2></Button>
                    </Col>
                    <Col>
                        <Button className="subscriptionStepButton"><h2>
                            2
                            </h2></Button>
                    </Col>
                    <Col>
                        <Button className="subscriptionStepButton"><h2>3</h2></Button>
                    </Col>
                </Row>

                <Row className="subscriptionRow">

                    <Col>



                        {currentFormStep.first === true ?
                            <>
                                <FormFirstSection />
                            </>
                            :
                            <>
                                <FormSecondSection />
                                <button onClick={() => whichStep()}>Back</button>
                            </>
                        }


                        <button onClick={() => whichStep()}>Next</button>


                    </Col>
                </Row>
            </Container>
        </>
    )
}