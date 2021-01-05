import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import Fail from "../../components/FailModal/FailModal";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import "./Footer.css"
import MailchimpSubscribe from "react-mailchimp-subscribe"
require("dotenv").config();

const styles = {
    listItems: {
        listStyleType: "none"
    },
    listItemTitle: {
        fontSize: "1.3em",
        color: "white"
    }

}


function Footer() {

    const [successModalShow, setSuccessModal] = useState(false);
    const [failModalShow, setFailModal] = useState(false);
    const [email, setEmail] = useState()

    const successOrFail = () => {
      
        if (!email) {
          setFailModal(true)
        } else {
          setSuccessModal(true)
        }
      }


    return (
        <>
            <Container fluid className="Container">

                <br />            
                
                <Row className="rowMargin">

                    <Col md={4} style={{ textAlign: "center"}} className="columnMargins">
                        <h5 className="footerSectionTitle"><strong>Contact • FAQ</strong></h5>

                        <hr className="footerHr" style={{maxWidth: "160px" }}></hr>
                            
                        <div className="m-2 socialMediaRowForce">
                            <a href="tel:215.696.9338"><i className="fas fa-phone-square fa-2x  socialMediaIcons"/></a>
                        </div>

                        <div className="m-2 socialMediaRowForce">
                            <a href="mailto:towncoffeecompany@gmail.com"><i className="fas fa-envelope-square fa-2x socialMediaIcons"/></a>
                        </div>

                        <div className="m-2 socialMediaRowForce">
                            <a href="/subscriptions#infoPlusFAQ"><i className="fas fa-question-circle fa-2x socialMediaIcons"/></a>
                        </div>

                    </Col>

                    
                    <Col md={4} style={{ textAlign: "center"}} className="columnMargins">  
                    
                        <h5 className="footerSectionTitle"><strong>Let's Connect</strong></h5>

                        <hr className="footerHr" style={{maxWidth: "160px" }}></hr>

                        <div className="m-2 socialMediaRowForce">
                        <a href="https://www.instagram.com/towncoffeecompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x socialMediaIcons"></i></a>
                        </div>

                        <div className="m-2 socialMediaRowForce">
                            <a href="https://www.facebook.com/towncoffeecompany" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x socialMediaIcons"></i></a>
                        </div>

                            
                        <div className="m-2 socialMediaRowForce">
                            <a href="https://wwww.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x socialMediaIcons"></i></a>
                        </div>
                        

                    </Col>
                      

                                        
                    <Col md={4} style={{ textAlign: "center"}} className="columnMargins">
                    <Container className="mailingListContainer">  

                    <h5 className="footerSectionTitle">
                    <strong>Join Our Mailing List</strong>
                    </h5>
                    <hr className="footerHr" style={{maxWidth: "230px" }}></hr>
                    <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>
                        {/* <InputGroup inline action="/signup" method="POST" className="mb-2 mailingListFormWidth" style={{ marginTop: "25px" }} >
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <FormControl
                                className="mb-2 formBackground"
                                size="sm"
                                id="inlineFormInputName2"
                                placeholder="Email Address"
                                name="email" 
                                type="email"
                                
                                />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" type="submit" className="mb-2" id="mailingListSubmitButton" size="sm" onClick={() => successOrFail()}>Submit</Button>
                            </InputGroup.Append>
                        </InputGroup> */}
                        </Container>
                    </Col>


                </Row>
                
                <br/>
                
                <Row>
                    <Col className="footerBottom" style={{ textAlign: "center" }}>
                        <p><span className="textMuted">&copy; 2020 Town Coffee Co. | All Rights Reserved</span>
                    <br/>    
                        <span className="dotSpacer"><a className="termsConditionsPrivacyFont" href="/terms_of_use">Terms &amp; Conditions</a> • <a className="termsConditionsPrivacyFont" href="/privacy_policy">Privacy Policy</a></span></p>
                    </Col>
                </Row>
                      
                
            </Container>


            <SuccessModal
          show={successModalShow}
          onHide={() => setSuccessModal(false)}
        />
        <Fail 
          show={failModalShow} 
          onHide={() => setFailModal(false)}
        />
        </>
    )
}

export default Footer;








// original wireframe footer 

                {/* Four columns: shop, support, our policies, and follow us */}

                {/* <Row> */}
                    
                    {/* <Col sm={4}> */}
                        {/* <h5>Join Our Mailing List:</h5>
                        <InputGroup inline action="/signup" method="POST" className="mb-3">
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <FormControl
                                className="mb-2"
                                size="sm"
                                id="inlineFormInputName2"
                                placeholder="Email address"
                                name="email" 
                                type="email"
                                onChange={event => setEmail(event.target.value)}
                                />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" type="submit" className="mb-2" id="mailingListSubmitButton" size="sm" onClick={() => successOrFail()}>Submit</Button>
                            </InputGroup.Append>
                        </InputGroup> */}
                        
                         {/* <Form inline action="/signup" method="POST">
                            <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                Name
                            </Form.Label>
                            <Form.Control
                                className="mb-2 mr-sm-2 border-top-0 border-right-0 border-left-0 border-dark"
                                size="sm"
                                id="inlineFormInputName2"
                                placeholder="Email address"
                                type="email"
                                name="email" 
                                onChange={event => setEmail(event.target.value)}/>
                            <Button type="submit" className="mb-2" size="sm" onClick={() => successOrFail()} >
                                Submit
                            </Button>
                        </Form> */}
                    {/* </Col>  */}

                    {/* <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Shop</li>
                            <li><Link to="/coffee">Coffee</Link></li>
                            <li><Link to="/subscriptions"></Link></li>
                            <li></li>
                        </ul>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Support</li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                            <li><Link to="/FAQ">FAQs</Link></li>
                            <li><Link to="mailto:towncoffeecompany@gmail.com">towncoffeecompany@gmail.com</Link></li>
                            <li><Link to="tel:215.696.9338">215-696-9338</Link></li>
                        </ul>
                    </Col>

                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Our Policies</li>
                            <li><Link to="/terms_of_use">Terms of Sale</Link></li>
                            <li><Link to="/terms_of_use">Terms of Use</Link></li>
                            <li><Link to="/privacy_policy">Privacy Policy</Link></li>
                            <li><Link to="#">Cookies</Link></li>
                        </ul>
                    </Col>
                    <Col sm={2} >
                        <ul style={styles.listItems}>
                            <li style={styles.listItemTitle}>Follow Us</li>
                            <li><Link to="#" target="_blank"><i className="fab fa-instagram socialMediaIcons"></i></Link></li>
                            <li><a href="https://www.facebook.com/towncoffeecompany" target="_blank"><i className="fab fa-facebook socialMediaIcons"></i></a></li>
                            <li><Link to="#" target="_blank"><i className="fab fa-twitter socialMediaIcons"></i></Link></li>
                        </ul>
                    </Col>



                </Row> */}