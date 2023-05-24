import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import lancia1 from "../img/deltas4/S4 FRONT.jpg";
import lancia2 from "../img/o37delta/o37delta.png"

function Lancia() {
  return (
    <>
      <Container>
        <Card style={{ margin: "50px", padding: "50px" }}>
          <Card.Title>Lancia</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: "512px" }}>
                  <Card.Img variant="top" src={lancia1} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "512px" }}>
                  <Card.Img variant="top" src={lancia2} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up
                      the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card>
      </Container>
    </>
  );
}

export default Lancia;
