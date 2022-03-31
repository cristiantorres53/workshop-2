import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { url } from "../helpers/url";
import axios from "axios";

function NavBar1() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        {data.map((d) => (
          <Nav.Item>
            <Nav.Link href="/home">{d.date}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
}

export default NavBar1;
