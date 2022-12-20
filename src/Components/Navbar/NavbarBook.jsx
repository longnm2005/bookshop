import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useSelector } from "react-redux";
export default function NavbarBook() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light">
      <Container>
        <Nav className="stylenavbar" activeclassname="active">
          <Link to="/">TRANG CHỦ</Link>
        </Nav>
        <Nav className="stylenavbar " activeclassname="active">
          <Link to="/shop">CỬA HÀNG</Link>
        </Nav>
        <Nav className="stylenavbar " activeclassname="active">
          <Link to="/about-us">GIỚI THIỆU </Link>
        </Nav>
        <Nav className="stylenavbar " activeclassname="active">
          <Link to="/cart">
            <div className="cart">
              <BsCart4 className="navcart " />
              <span className="showquality">{totalQuantity}</span>
            </div>
          </Link>
        </Nav>
        <Nav className="stylenavbar " activeclassname="active">
          <Link to="/signin">
            <MdAccountCircle className="navaccount" />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
