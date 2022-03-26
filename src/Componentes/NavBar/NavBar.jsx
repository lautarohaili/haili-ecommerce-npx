import Widget from "../Widget/Widget";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <NavLink className={({ isActive }) => "navbarTitulo"} to="/">
            Hail Electronica
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/celulares"
              >
                Celulares
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/tablets"
              >
                Tablets
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/notebook"
              >
                Notebook
              </NavLink>
            </Nav>
            <NavLink className={({ isActive }) => "carrito"} to="cart">
              <Widget />
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
