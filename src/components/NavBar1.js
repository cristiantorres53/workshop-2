import React from "react";
import Nav from "react-bootstrap/Nav";

function NavBar1() {
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">All Sesions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">2022-06-06</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">2022-09-02</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">2023-03-19</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">2022-06-08</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBar1;
