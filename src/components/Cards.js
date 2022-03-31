import React, { useEffect, useState } from "react";
import "../styles/card.css";
import Estrella from "../assets/estrella.png";
import axios from "axios";
import { url } from "../helpers/url";

const Cards = () => {
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
      {data.map((d) => (
        <div className="contenedor">
          <div className="flex">
            <h2 className="grenn ">GTC KEYNOTE [S42295]</h2>
            <img alt="estrella" src={Estrella} />
          </div>
          <div>
            <h4 className="grenn margLeft">Watch Keynote</h4>
            <p className="margLeft">
              Don't miss this keynote from NVIDIA Founder an CEO, Jensen Huang,
              ashe speaks on the future of computing
            </p>
            <p className="margLeft">
              <span className="grenn">Jensen Huang,</span> Founder and CEO,
              NVIDIA
            </p>
          </div>
          <p className="margLeft">
            <b>Industry Segment:</b>All industries
          </p>
          <p className="margLeft">
            <b>Primary Topic:</b>Al Strategy for Business Leaders
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
