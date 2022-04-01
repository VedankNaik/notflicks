import React from "react";
import JumboData from "../../Data/jumbo.json";
import "./Jumbotron.css";

function Jumbotron() {
  let row = ["Jumbotron__Inner__Reverse", "Jumbotron__Inner__Row"];
  return (
    <div className="Jumbotron__Container">
      {JumboData.map((item) => (
        <div className={`Jumbotron__Item`} key={item.id}>
          <div className={row[item.id % 2]}>
            <div className="Jumbotron__Pane">
              <h1 className="Jumbotron__Title">{item.title}</h1>
              <h2 className="Jumbotron__SubTitle">{item.subTitle}</h2>
            </div>
            <div className="Jumbotron__Pane">
              <img className="Jumbotron__Image" src={item.image} alt={item.alt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jumbotron;
