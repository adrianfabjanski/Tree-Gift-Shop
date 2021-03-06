import React, { useState, useContext, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Collapse from "react-bootstrap/Collapse";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Search, Basket3, TreeFill } from "react-bootstrap-icons";
import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";
import { CartContext } from "../../CartContext";
import { ProductContext } from "../../ProductContext";
import { LoginProvider } from "../../LoginContext";
import OverlayNav from "./OverlayNav";
import Cartt from "../CartExtraPage/Cartt";
import "./Navigation.css";
import logo from "../../Logo/Treeduce.png";

function Navigation() {
  const { handleChange } = useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const { cart, sidebar, showSidebar, setBounce, bounce } = useContext(
    CartContext
  );
  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 10000);
    }
  }, [open]);

  return (
    <div>
      <LoginProvider>
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand as={NavHashLink} smooth to="/#">
            <img className="Logo" src={logo} alt="Treeduce" />
          </Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="tabs" className="mr-auto">
              <Nav.Link as={NavHashLink} smooth to="/#home" exact={true}>
                Home
              </Nav.Link>
              <NavDropdown
                title="Buy a tree giftcard!"
                id="collapsible-nav-dropdown"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item as={HashLink} smooth to="/#info">
                  Why Treeduce?
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} smooth to="/#howto">
                  How to buy a Tree Gift Card
                </NavDropdown.Item>
                <NavDropdown.Item as={HashLink} smooth to="/#products">
                  Find your perfect Tree!
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavHashLink} smooth to="/#about">
                About us
              </Nav.Link>
              <Nav.Link as={NavHashLink} smooth to="/#faq">
                FAQ
              </Nav.Link>
              <Nav.Link as={NavHashLink} smooth to="/#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Collapse in={open}>
            <div id="search">
              <Form inline>
                <FormControl
                  onChange={handleChange}
                  type="text"
                  placeholder="Find a tree!"
                  className="mr-sm-2"
                />
                <Button as={HashLink} smooth to="/#products">
                  Search
                </Button>
              </Form>
            </div>
          </Collapse>
          <div className="icons">
            <Button
              variant="light"
              onClick={() => setOpen(!open)}
              aria-controls="search"
              aria-expanded={open}
            >
              <Search size={25} />
            </Button>
          </div>
          <div className="icons">
            <OverlayNav />
          </div>
          <div className="icons">
            <Button variant="light" onClick={showSidebar}>
              <Basket3
                size={25}
                id="cart-button"
                onAnimationEnd={() => setBounce(0)}
                bounce={bounce}
              />
              <span id="cart-length">{cart.length}</span>
              <TreeFill 
                size={25} 
                className="bounce TreeBasket"
                bounce={bounce}
                onAnimationEnd={() => setBounce(0)}
              />
            </Button>
          </div>
          <div className={sidebar ? "cart-menu active" : "cart-menu"}>
            <Cartt />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Navbar>
      </LoginProvider>
    </div>
  );
}

export default Navigation;
