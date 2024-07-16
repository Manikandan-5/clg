import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const SecAbout = () => {
  return (
    <>

    <section id="about">
      <Container>
      <h1 className="text-center mt-3">Welcome Hero</h1>

      {/* style={{width: "28rem"}} */}
        <Row>
          <Col lg={6} md={6} >
          
          <h3 className="text-center mt-5">
            A university is an institution of higher learning and research,
            offering undergraduate and postgraduate education. It provides a
            diverse range of academic programs and degrees across various fields
            of study. Universities are centers for innovation, fostering
            critical thinking and intellectual growth. They facilitate cultural
            exchange and personal development through vibrant campus
            communities. Their mission is to prepare students for professional
            success and societal contribution.</h3>
          </Col>
          <Col lg={6} md={6} className="d-flex align-items-center justify-content-center">

        <img src={require("../assets/Exams-bro.png")} alt="Student" className="img-fluid mt-3" />

</Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default SecAbout;
