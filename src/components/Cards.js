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
            <h2 className="grenn">{d.title}</h2>
            <img alt="estrella" src={Estrella} />
          </div>
          <div>
            <h4 className="grenn">{d.description}</h4>          
            <p>
              <span className="grenn">{d.speakers}</span> {d.audience_level}
            </p>
          </div>
          <p>
            <b>Industry Segment:</b>{d.industry_segment}
          </p>
          <p>
            <b>Primary Topic:</b>{d.primary_topic}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
