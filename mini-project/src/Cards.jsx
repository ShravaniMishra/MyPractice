import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.imgsrc} alt="" />
        <div className="cardInfo">
          <span className="category">{props.title}</span>
          <h3 className="title">{props.fname}</h3>
          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
