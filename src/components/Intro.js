import { Container, Row, Col, Button } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className="judul text-danger">NEPPLIK</div>
            <div className="mt-4">
              <div className="judul">NONTON GRATIS,</div>
              <div className="judul">GAK PAKE KARCIS</div>
            </div>

            <div className="introButton mt-4">
              <Button variant="danger"> Show All</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
