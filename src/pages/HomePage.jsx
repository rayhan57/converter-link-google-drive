import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import MyForm from "../assets/components/MyForm";
import LinkResult from "../assets/components/LinkResult";

const HomePage = () => {
  const [linkDrive, setLinkDrive] = useState("");
  const [convertResult, setConvertResult] = useState("");
  const [error, setError] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const newLink = "http://drive.google.com/uc?export=view&id=";

  const handleInputChange = (e) => setLinkDrive(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!linkDrive.includes("https://drive.google.com/file/d/")) {
      setError("The URL must exist https://drive.google.com/file/d/");
      return;
    }

    const getId = linkDrive
      .replace("https://drive.google.com/file/d/", "")
      .replace("/view?usp=drive_link", "");

    setError("");
    setConvertResult(`${newLink}${getId}`);
  };

  const handleReset = () => {
    setLinkDrive("");
    setConvertResult("");
  };

  setTimeout(() => setShowNotif(false), 2500);

  return (
    <>
      <Container className="mt-4">
        <Row className="text-center">
          <h1 className="text-quaternary">Converter Link</h1>
        </Row>

        <Row className="mt-3">
          <MyForm
            handleSubmit={handleSubmit}
            linkDrive={linkDrive}
            handleInputChange={handleInputChange}
            handleReset={handleReset}
            error={error}
          />
        </Row>

        <Row className="mt-3 px-2">
          {convertResult !== "" && (
            <LinkResult
              convertResult={convertResult}
              setShowNotif={setShowNotif}
            />
          )}
        </Row>
        <Row className="mt-3 text-center">
          {showNotif && <p className="text-secondary">Link copied</p>}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
