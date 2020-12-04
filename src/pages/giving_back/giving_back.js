import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CoffeeBanner from "../../components/CoffeeBanner/CoffeeBanner"


const styles = {
    rowStyle: {
        backgroundColor: "whitesmoke"
    },
    OPFTP: {
        maxWidth: "50%",
        textAlign: "center"
    },
    centeredCol: {
        textAlign: "center"
    },
    bCorpLogo: {
        height:250
    }


    // #bCorpLogo {
    //     height:170px;
    //     object-fit:cover;
    //     object-position:top left;
    // }
}


function givingBack() {
    return (
        <>

            <CoffeeBanner />

            <Container>
                <br />

                <Row>
                    <Col style={styles.centeredCol} >
                        <h1>Giving Back</h1>
                    </Col>
                </Row>

                <br />

                <Row style={styles.rowStyle}>
                    <Col style={styles.centeredCol}>
                        <h2>B Certified Corp Pending</h2>
                        <p>Positive impact on company's ? and environmental performance meets the highest standards, is verified and transparent to all. Currently 3,300 members.</p>
                    </Col>
                    <Col style={styles.centeredCol} className="centerImg">
                        <img src="/imgs/b-corp-logo.png" id="bCorpLogo" style={styles.bCorpLogo} /></Col>
                </Row>

                <br />

                <Row style={styles.rowStyle}>
                    <Col style={styles.centeredCol} className="centerImg">
                        <img src="/imgs/onepercent_ftp_logo.jpg" id="givingBackOnePercentImg" style={styles.OPFTP} /></Col>
                    <Col style={styles.centeredCol}>
                        <h2>1% for the Planet</h2>
                        <p>Businesses commit to giving 1% of gross sales each year given through this non-profit to support approved environmental non-profits. Currently 3,000 members coming together to protect the future of our planet.</p>
                    </Col>
                </Row>
                <br />

                <Row style={styles.rowStyle}>
                    <Col style={styles.centeredCol}>
                        <h2>Climate Change</h2>
                    </Col>
                    <Col style={styles.centeredCol} className="centerImg">
                        <img src="https://via.placeholder.com/150" />
                    </Col>
                </Row>
                <br />

                <Row style={styles.rowStyle}>
                    <Col style={styles.centeredCol} className="centerImg">
                        <img src="https://via.placeholder.com/150" />
                    </Col>
                    <Col style={styles.centeredCol} >
                        <h2>Carbon Neutral</h2>
                    </Col>
                </Row>
                <br />

                <Row style={styles.rowStyle}>
                    <Col style={styles.centeredCol} >
                        <h2>Clean Energy</h2>
                    </Col>
                    <Col style={styles.centeredCol} className="centerImg">
                        <img src="https://via.placeholder.com/150" />
                    </Col>
                </Row>


                <br />
                <br />

            </Container>
        </>
    )
}

export default givingBack;