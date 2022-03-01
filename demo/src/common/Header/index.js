import React from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import Badge from "@material-ui/core/Badge";

import "./index.scss";

import { FcWiFiLogo } from "react-icons/fc";
import { BsChatLeft } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <FcWiFiLogo className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Row className="row-elements">
            <Col className="column-elements">
              <Badge badgeContent={5} color="secondary">
                <BsChatLeft className="chat" />
              </Badge>
            </Col>
            <Col className="column-elements">
              <Badge badgeContent={10} color="secondary">
                <HiOutlineBell className="bell" />
              </Badge>
            </Col>
            <Col className="column-profile">
              <CgProfile className="profile" />
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
