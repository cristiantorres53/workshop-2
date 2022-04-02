import React from "react";
import "../styles/card.css";
import Estrella from "../assets/estrella.png";

const Cards = ({ data }) => { 

  return (
    <div>

      {

        data.map((d, index) => (

          <div key={index} className="contenedor">
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
              <b>Lenguage:</b>{d.lenguage}
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
