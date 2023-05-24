import { Navbar, Container, Nav } from "react-bootstrap";
import Skoda from "./brands/skoda";
import Audi from "./brands/audi";
import Lancia from "./brands/lancia";
import Ford from "./brands/ford";
import MG from "./brands/mg";
import Renault from "./brands/renault";
import Peugeot from "./brands/peugeot";

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="Skoda">Škoda</Nav.Link>
              <Nav.Link href="Audi">Audi</Nav.Link>
              <Nav.Link href="Lancia">Lancia</Nav.Link>
              <Nav.Link href="Ford">Ford</Nav.Link>
              <Nav.Link href="MG">MG</Nav.Link>
              <Nav.Link href="Renault">Renault</Nav.Link>
              <Nav.Link href="Peugeot">Peugeot</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Skoda></Skoda>
      <Audi></Audi>
      <Lancia></Lancia>
      <Ford></Ford>
      <MG></MG>
      <Renault></Renault>
      <Peugeot></Peugeot>
    </>
  );
}

export default App;
