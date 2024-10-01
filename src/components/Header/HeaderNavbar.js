import { MdAccountCircle } from "react-icons/md";
import "../../App.sass";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { NavLink, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeaderNavbar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Exclusive</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to="/">
                <div>Home</div>
              </NavLink>
              <NavLink to="/contact">
                <div>Contact</div>
              </NavLink>
              <NavLink to="/">
                <div>About</div>
              </NavLink>
              <NavLink to="/">
                <div>Sign in</div>
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <CiHeart size={"3em"} className="icon heart-icon" />
              <IoCartOutline size={"3em"} className="icon cart-icon" />
              <MdAccountCircle
                size={"3em"}
                color="red"
                className="icon account-icon"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
