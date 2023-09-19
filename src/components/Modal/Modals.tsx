import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Modals() {
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => setShowSuccess(true);
  const handleCloseSuccess = () => {
    setShowSuccess(false);
    // Optionally, you can reset the form or perform other actions here
  };

  return (
    <>
      {/* Add Inventory Item Button */}
      <button
        type="button"
        className="btn btn-primary btn-sm fw-semibold"
        onClick={handleShow}
      >
        Add Inventory Item
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Inventory Item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.Select">
              <Form.Label>Select Item Type:</Form.Label>
              <Form.Select aria-label="Default select example1">
                <option>Item Type</option>
                <option value="1">Laptop</option>
                <option value="2">Smartphone</option>
                <option value="3">Tablet</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Item Name:</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="exampleForm.Select2"
              >
                <Form.Label>Units:</Form.Label>
                <Form.Select aria-label="Default select example2">
                  <option>units</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description:</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
