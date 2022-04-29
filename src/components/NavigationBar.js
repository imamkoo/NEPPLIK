import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">NEPPLIK</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TOP MOVIES</Nav.Link>
            <Nav.Link href="#superhero">MARVEL</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
