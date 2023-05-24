import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import audi1 from "../img/quatro2Edition/quattro2.jpg"
import audi2 from "../img/quattro3Edition/quattro3.png"

function Audi() {
  return (
    <>
      <Container>
        <Card style={{ margin: "50px", padding: "50px" }}>
          <Card.Title>Audi</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Container>
            <Row>
              <Col><Card style={{ width: "512px", padding: "20px" }}>
                <Card.Img variant="top" src={audi2} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card></Col>
              <Col><Card style={{ width: "512px", padding: "20px" }}>
                <Card.Img variant="top" src={audi1} />
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

export default Audi;
