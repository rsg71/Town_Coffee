
import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoffeeBanner from "../../components/Coffeebanner/Coffeebanner"
import "./PrivacyPolicy.css"



function PrivacyPolicy () {

    useEffect(() => {
        document.title = "Privacy Policy | Town Coffee Company"
    }, []);


return (
<>
<CoffeeBanner/>

    <Container>
        <Row>
            <Col>
            <h1 className="termsOfUseHeader">Privacy Policy</h1>

                <h3>1. Introduction</h3>
                <p>
                We are responsible for maintaining and protecting the Personal Information under our control. We have designated an individual or individuals who is/are responsible for compliance with our privacy policy.
                </p>

                <h3>2. Identifying Purposes</h3>
                <p>We collect, use, and disclose Personal Information to provide you with the product or service you have requested and to offer you additional products and services we believe you might be interested in. The purposes for which we collect Personal Information will be identified before or at the time we collect the information. In certain circumstances, the purposes for which information is collected may be clear, and consent may be implied, such as where your name, address, and payment information is provided as part of the order process.</p>

                <h3>3. Consent</h3>
                <p>
                Knowledge and consent are required for the collection, use, or disclosure of Personal Information except where required or permitted by law. Providing us with your Personal Information is always your choice. However, your decision not to provide certain information may limit our ability to provide you with our products or services. We will not require you to consent to the collection, use, or disclosure of information as a condition to the supply of a product or service, except as required to be able to supply the product or service.
                </p>

                <h3>4. Limiting Collection</h3>
                <p>
                The Personal Information collected will be limited to those details necessary for the purposes identified by us. With your consent, we may collect Personal Information from you in person, over the telephone, or by corresponding with you via mail, facsimile, or the Internet.
                </p>

                <br/>
                <br/>


            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            </Col>
        </Row>

    </Container>
</>
)
}

export default PrivacyPolicy;