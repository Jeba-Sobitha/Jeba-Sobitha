import React from "react";
import "./MainPage.css";
import history from "../Images/history.png";
import math from "../Images/math.png";
import fun from "../Images/fun.png";
import Science from "../Images/Science-Vector-PNG-Image-File.png";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div>

      <div className="card-container">
        <div id="card" className="history">
          <img src={history} alt="A note of history" />
          <h1>History</h1>
          <Link to='/history' ><button className="button">Start</button></Link>
        </div>
        <div id="card" className="maths">
          <img src={math} alt="Says go-math" />
          <h1>Maths</h1>
          <Link to='/maths' ><button className="button">Start</button></Link>
        </div>
        <div id="card" className="science">
          <img src={Science} alt="science" />
          <h1>Science</h1>
          <Link to='/science' ><button className="button">Start</button></Link>
        </div>
        <div id="card" className="fun">
          <img src={fun} alt="fun" />
          <h1>Story Time</h1>
          <Link to='/story' ><button className="button">Start</button></Link>
        </div>
      </div>

    </div>
  );
}
