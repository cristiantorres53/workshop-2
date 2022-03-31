import React from 'react'
import '../styles/card.css'
import Estrella from '../assets/estrella.png'

const Cards = () => {
  return (
    <div className='contenedor'>
      <div className="flex">
        <h2 className="grenn">GTC KEYNOTE [S42295]</h2>
        <img alt="estrella" src={Estrella} />
      </div>
      <div>
        <h4 className="grenn">Watch Keynote</h4>
        <p>
          Don't miss this keynote from NVIDIA Founder an CEO, Jensen Huang, ashe
          speaks on the future of computing
        </p>
        <p>
          <span className="grenn">Jensen Huang,</span> Founder and CEO, NVIDIA
        </p>
      </div>
      <p>
        <b >Industry Segment:</b>All industries
      </p>
      <p>
        <b>Primary Topic:</b>Al Strategy for Business Leaders
      </p>
    </div>
  );
}

export default Cards