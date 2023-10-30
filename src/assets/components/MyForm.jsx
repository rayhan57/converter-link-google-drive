import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const MyForm = ({
  handleSubmit,
  linkDrive,
  handleInputChange,
  handleReset,
  error,
}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="linkDrive">
          <Form.Label className="text-quaternary">Link Drive</Form.Label>
          <Form.Control
            type="text"
            placeholder="Example: https://drive.google.com/file/d/11hcwX15n4bqtoxFASbK/view?usp=drive_link"
            name="link-drive"
            value={linkDrive}
            onChange={handleInputChange}
            required
          />
          {error && <p className="text-danger small">{error}</p>}
        </Form.Group>

        <Row>
          <Col>
            <Button variant="tertiary" className="w-100" type="submit">
              Convert
            </Button>
          </Col>
          <Col>
            <Button variant="secondary" className="w-100" onClick={handleReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MyForm;
