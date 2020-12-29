import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./SuccessModal.css";


function SuccessMC(props) {
  return (
    <>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Subscribed!
            </Modal.Title>
        </Modal.Header>
        <Modal.Body className="sModal">
          <h3> <i className="fas fa-thumbs-up fa-2x"></i> </h3>
          <br/>
            <h3>
              You are now signed up for our dope monthly newsletter!
            </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>




    </>
  )
}

export default SuccessMC;