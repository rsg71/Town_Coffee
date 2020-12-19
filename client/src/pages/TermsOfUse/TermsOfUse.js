
import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"
import "./TermsOfUse.css"



function TermsOfUse () {

    useEffect(() => {
        document.title = "Terms of Use | Town Coffee Company"
    }, []);

return (
<>
<CoffeeBanner/>

    <Container>
        <Row>
            <Col>
            <h1 className="termsOfUseHeader">Terms of Use</h1>

            <h2 className="termsOfUseh2">Return Policy</h2>
                <h3>1. Returns &amp; Exchanges</h3>
                <p>
                We guarantee both our product’s freshness and our customer’s satisfaction. If for any reason you are not fully satisfied with your order, you may return it for a refund within 30 days. Including your order number, please notify us, via email, what the issue may be and a customer service representative will contact you.
                </p>

                <h3>2. Shipping</h3>
                <p>If a return is needed, we will issue a prepaid UPS return label to you, via email. You can affix it over the original label on the box containing the item(s) and drop off at any UPS location, or call 800-PICK-UPS for a pickup.</p>

                <p>In the event that you receive product that needs to be exchanged, we will ship out the new item with a UPS return label for the original item. Follow the same procedure as above. Please note that all outgoing product must be prepaid and in the event that a credit is due, we will issue the refund upon receipt of the return shipment.</p>

                <br/>
                <br/>

            <h2 className="termsOfUseh2">General Information </h2>


                <h3>1. Delivery Policy</h3>
                <p>
                Coffee is roasted daily, however not all blends are roasted each day. Generally, coffee is shipped within one business day of your order. In the event of a back order, your coffee is typically shipped within 48 hours. 
                </p>

                <h3>2. Delivery Location</h3>
                <p>
                Items offered on our website are available for delivery to addresses in the United States.
                </p>

                <h3>  3. Delivery Time  </h3>
                <p>   Unless there are exceptional circumstances, we make every effort to fulfill your order within one business day of the date of your order. Business day means Monday to Friday, except holidays. Please note we do not ship on Saturday and Sundays. Date of delivery may vary due to carrier shipping practices, delivery location, method of delivery, and the items ordered. Products also may be delivered in separate shipments.   </p>
               
                <h3>   4. Local Pickup </h3>
                <p>    If you would like to pick up your order and avoid any shipping charges, the ordering process is the same, however at checkout you will have to select local pickup as your shipping option. This will alert Customer Service and will also remove the shipping charges. Please allow 4 business hours for processing before arrival. Our pickup hours are 8:00am-3:30pm on normal business days.  </p>
               
                <h3>   5. Shipping Costs </h3>
                <p>    Shipping costs are based on the weight or the dimensional weight of your order and the delivery method. To find out how much your order will cost, add the items you would like to purchase to your cart, and proceed to the checkout page. Once at the checkout screen, shipping charges, if any, will be displayed.  </p>

                <h3>   6. Damaged Items in Transport </h3>
                <p>    If there is any damage to the packaging on delivery, please contact us immediately at mail@mail.com or 123-456-7890.  </p>

                <h3>  7. Questions  </h3>
                <p>   If you have any questions about the delivery and shipment or your order, please contact us at mail@mail.com.   </p>


                <br/>
                <br/>
          


            <h2 className="termsOfUseh2">Terms of Service </h2>


            <h3>1. Introduction  </h3>
            <p>
            This website is operated by Jim’s Organic Coffee. The terms “we,” “us,” and “our” refer to Jim’s Organic Coffee. The use of our website is subject to the following terms and conditions of use, as amended from time to time (the “Terms”). The Terms are to be read together by you with any terms, conditions, or disclaimers provided in the pages of our website. Please review the Terms carefully. The Terms apply to all users of our website, including, without limitation, users who are browsers, customers, merchants, vendors, and/or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website, use any of our website’s services or place an order on our website.
            </p>
           
            <h3>2. Use of Our Website  </h3>
            <p>
            You agree to use our website for legitimate purposes and not for any illegal or unauthorized purpose, including without limitation, in violation of any intellectual property or privacy law. By agreeing to the Terms, you represent and warrant that you are at least the age of majority in your state or province of residence and are legally capable of entering into a binding contract.</p>

            <p>You agree to not use our website to conduct any activity that would constitute a civil or criminal offense or violate any law. You agree not to attempt to interfere with our website’s network or security features or to gain unauthorized access to our systems.</p>

            <p>You agree to provide us with accurate personal information, such as your email address, mailing address, and other contact details in order to complete your order or contact you as needed. You agree to promptly update your account and information. You authorize us to collect and use this information to contact you in accordance with our Privacy Policy.
            </p>
            

            <h3> 3. General Conditions </h3>
            <p>
            We reserve the right to refuse service to anyone, at any time, for any reason. We reserve the right to make any modifications to the website, including terminating, changing, suspending, or discontinuing any aspect of the website at any time, without notice. We may impose additional rules or limits on the use of our website. You agree to review the Terms regularly, and your continued access or use of our website will mean that you agree to any changes.</p>

            <p>You agree that we will not be liable to you or any third party for any modification, suspension, or discontinuance of our website or for any service, content, feature or product offered through our website
            </p>

            <h3> 4. Products or Services</h3>
            <p>
            All purchases through our website are subject to product availability. We may, in our sole discretion, limit or cancel the quantities offered on our website or limit the sales of our products or services to any person, household, geographic region, or jurisdiction.</p>

            <p>Prices for our products are subject to change, without notice. Unless otherwise indicated, prices displayed on our website are quoted in U.S. dollars.
            </p>

            <p>We reserve the right, in our sole discretion, to refuse orders, including without limitation, orders that appear to be placed by distributors or resellers. If we believe that you have made a false or fraudulent order, we will be entitled to cancel the order and inform the relevant authorities.
            </p>


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

export default TermsOfUse;