import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./BreadCrumbsCoffee.css"

export default function BreadCrumbsCoffee(props) {
    return (
        <>
             <Row>
                    <Col style={{fontSize: "14px"}}>
                    <span><Link className="breadcrumbLink" to="/">Home </Link>
                    <i className="fas fa-angle-right"></i>
                    <Link className="breadcrumbLink" to="/coffee"> Coffee </Link> 
                    <i className="fas fa-angle-right"></i>
                    <span style={{fontWeight: "bold"}}> {props.name}</span>
                     </span>
                    </Col>
                </Row>
                <br/>
        </>
    )
}
