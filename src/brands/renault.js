import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import renault1 from "../img/renault5turbo/5turbo.png"

function Renault() {
  return (
    <>
      <Container>
        <Card style={{ margin: "50px", padding: "50px" }}>
          <Card.Title>Renault</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: "512px" }}>
                  <Card.Img variant="top" src={renault1} />
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

export default Renault;
