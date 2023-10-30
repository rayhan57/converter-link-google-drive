import React from "react";
import { Button, Card } from "react-bootstrap";

const LinkResult = ({ convertResult, setShowNotif }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(convertResult);
    setShowNotif(true);
  };

  return (
    <>
      <Card className="px-0 ">
        <Card.Header className="text-center">Your Link</Card.Header>
        <Card.Body>
          <Button
            className="float-end"
            variant="outline-quaternary"
            size="sm"
            onClick={handleCopy}
          >
            Copy
          </Button>
          <Card.Text className="text-center py-4">{convertResult}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default LinkResult;
