import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../CssFolder/NavPage.css"
import { IoFastFoodOutline } from "react-icons/io5";function NavPage() {
  return (
    <>
      <Navbar variant="dark" expand="lg" className="mainNav">
        <Container fluid>
          <Navbar.Brand className="navbarBrand">
          < IoFastFoodOutline style={{ fontSize: 50, marginRight: "10px" }}/>
            <b> TasteBuds  </b>
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="navbarCollapse">
            <Nav className="miniNav">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>

              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
             
              <Nav.Link as={Link} to="/order">
                Order
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavPage;
