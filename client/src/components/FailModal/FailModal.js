import React from "react";
import { Button, Modal } from "react-bootstrap";
import "./FailModal.css";


function Fail(props) {
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
                    
                    Sorry!

            </Modal.Title>

        </Modal.Header>

        <Modal.Body className="sModal">
            
          <h3> <i className="far fa-sad-tear"></i> </h3>
          <br/>

            <h3>
            Something went wrong, please go back and make sure all the fields are filled in correctly.
            </h3>

        </Modal.Body>

        <Modal.Footer>

          <Button onClick={props.onHide}>Close</Button>

        </Modal.Footer>

      </Modal>





    </>
  )
}

export default Fail;