import React from "react";
import JumboData from "../../Data/jumbo.json";
import "./Styles.css";

function Jumbotron() {
  let row = ["Inner__Reverse", "Inner__Row"];
  return (
    <div className="Container">
      {JumboData.map((item) => (
        <div className={`Item`} key={item.id}>
          <div className={row[item.id % 2]}>
            <div className="Pane">
              <h1 className="Title">{item.title}</h1>
              <h2 className="SubTitle">{item.subTitle}</h2>
            </div>
            <div className="Pane">
              <img className="Image" src={item.image} alt={item.alt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Jumbotron;
