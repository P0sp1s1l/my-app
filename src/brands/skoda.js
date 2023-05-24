import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import skoda1 from "../img/skoda130LR/130lr.png"
import skodaLogo from "../img/logoSkoda.png";

function Skoda() {
  return (
    <>
      <Container>
        <Card style={{ margin: "50px", padding: "50px",backgroundColor:"#b6d7a8"}}>
          <Card.Title><h2> Škoda     <img wi src={skodaLogo} ></img></h2></Card.Title>
          <Card.Text>
         
          </Card.Text>
          <Container>
            <Row>
              <Col>
                <Card style={{ width: "512px" }}>
                  <Card.Img variant="top" src={skoda1} />
                  <Card.Body>
                    <Card.Title>Škoda 130 LR, Československo 1984</Card.Title>
                    <Card.Text>
                             <b>motor:</b> čtyřválec (R4)      
                    <br></br><b>výkon:</b> 96 kW 
                    <br></br><b>převodovka:</b> 5ti stupňová 
                    <br></br><b>hmotnost:</b> 850 kg 
                    <br></br><b>rok výroby:</b> 1984
                    <br></br><b>cena:</b> 675 000 Kč
                    </Card.Text>
                    <Button variant="primary"><b>Více info</b></Button>
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

export default Skoda;
