
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Žvejybos naujienos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Pagrindinis</Nav.Link>
            <NavDropdown title="Naujienų rūšis" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Žvejybos taisyklės</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Žvejybos parduotuvės</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3">Rekordai</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-light">Prisijungti</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
