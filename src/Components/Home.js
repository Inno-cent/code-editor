import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import homeImg from "../Assets/m.jpg";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div style={{ minHeight: "100vh", height: "auto", background: "#000" }}>
      <Container style={wrapper}>
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#f0c19e" }}>Website Coding from Anywhere</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              With the help of this online code editor, you can quickly write
              your HTML, CSS, and JavaScript code and see the live site preview
              instantly.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Web Editor
            </Button>

            <h2 style={{ color: "#f0c19e", paddingTop: "70px" }}>
              Generate README in Seconds
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
              Online markdown editor with a personalized toolbar to make
              creating your readme simple.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/markdown">
              Markdown Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
