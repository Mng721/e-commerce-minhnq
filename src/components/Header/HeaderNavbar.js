import { MdAccountCircle } from "react-icons/md";
import "../../App.sass";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import DropDownContent from "./DropDownContent";

const HeaderNavbar = () => {
  const [open, setOpen] = useState();
  const handleToggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to={"/"} className="navbar-brand">
            Exclusive
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink to={"/"} className="nav-link">
                <div>Home</div>
              </NavLink>
              <NavLink to={"/contact"} className="nav-link">
                <div>Contact</div>
              </NavLink>
              <NavLink to={"/about"} className="nav-link">
                <div>About</div>
              </NavLink>
              <NavLink to={"/signin"} className="nav-link">
                <div>Sign in</div>
              </NavLink>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="What are you loking for?"
                className="me-2"
                aria-label="Search"
              />

              <CiHeart size={"2em"} className="icon heart-icon" />
              <IoCartOutline size={"2em"} className="icon cart-icon" />
              <div className="drop-down">
                <MdAccountCircle
                  size={"2em"}
                  color="red"
                  className="icon account-icon"
                  onClick={() => {
                    handleToggleDropdown();
                  }}
                />
                <DropDownContent open={open} />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderNavbar;
