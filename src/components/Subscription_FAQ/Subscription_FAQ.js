
import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import "./subscription_FAQ.css"



function Subscription_FAQ() {
return (
<>
        <Accordion>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        When will my subscription order be shipped?
                        <i className="fas fa-chevron-down"></i>
                    </Accordion.Toggle>
                  
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        
                    <p>Log into your Account to view your next ubscription ship date. (Click <a href="#">here</a> for a guide to your subscription).</p>

                    <p>General Shipping Info: When you place your order, choose the shipping interval of 2, 4, 6, 8, or 12 weeks. Your first order will typically be shipped the next business day. Depending on your chosen shipping interval, your next order will then be charged and ship 2, 4, 6, 8 or 12 weeks after the first order date.</p>

                    <p>We ship every Monday-Friday with the exception of the following holidays: New Year’s Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Thanksgiving Day, Day after Thanksgiving, Christmas Eve, Christmas Day, Christmas Day (Observed), and New Year’s Eve. Subscription orders that fall on holidays will be shipped the following business day. Please note that we do not ship on Saturdays or Sundays, and inclement weather could impact shipping times.</p>
                    
                    </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    How do I pause my subscription? 
                    <i className="fas fa-chevron-down"></i>

                    </Accordion.Toggle>
                    
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>

                    <p>If you want to pause your subscription for any reason, log into your Account and select Subscriptions. View the subscription you wish to pause and under Actions click “Pause”. Click here: How to Make a Change to My Subscription to learn how to make changes.</p>

                    </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    How do I make changes to my subscription?
                    <i className="fas fa-chevron-down"></i>

                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        
                    <p>Click here: How to Make a Change to My Subscription .</p>
                        
                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    How do I cancel my subscription?
                    <i className="fas fa-chevron-down"></i>

                    </Accordion.Toggle>
                    
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        
                    <p>Log into your Account and select Subscriptions. View the subscription you wish to cancel and select “Cancel”. Your subscription will be marked as pending and then our system will automatically cancel the subscription. Click here: How to Make a Change to My Subscription to learn how to make changes.</p>


                        </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                    How is my credit card stored?
                    <i className="fas fa-chevron-down"></i>

                    </Accordion.Toggle>
                    
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>

                    <p>Subscription orders will charge your credit card at the shipping interval of your choice. Credit cards are stored through a third party secure encrypted system on Authorize.net.</p>

                    </Card.Body>
                    </Accordion.Collapse>
            </Card>
            <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                    How do I get started? 
                    <i className="fas fa-chevron-down"></i>

                    </Accordion.Toggle>
                     
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>
                    <p>Click here to visit our shop and choose any coffee. On the coffee’s product page, choose “Subscribe and Save 15%” to choose your shipping interval and place the subscription in your cart for checkout.</p>

                    </Card.Body>
                    </Accordion.Collapse>
            </Card>
        </Accordion>

</>
)
}

export default Subscription_FAQ;
