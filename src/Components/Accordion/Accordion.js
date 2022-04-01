import React, { useState } from "react";
import Faqs from "../../Data/faqs.json";
import "./Accordion.css";

function Accordion() {
  const [toggleShow, setToggleShow] = useState();

  return (
    <div className="Accordion__Container">
      <div className="Accordion__Inner">
        <h1 className="Accordion__Title">Frequently Asked Questions</h1>
        <div className="Accordion__Frame">
          {Faqs.map((item) => (
            <div className="Accordion__Item" key={item.id}>
              <div
                className="Accordion__Header"
                onClick={() => setToggleShow(toggleShow === item.id ? 0 : item.id)}
              >
                {item.header}
                {toggleShow === item.id ? (
                  <img src="/images/icons/close-slim.png" alt="Close" />
                ) : (
                  <img src="/images/icons/add.png" alt="Open" />
                )}
              </div>
              <div
                className={`Accordion__Body ${toggleShow === item.id ? "Accordion__open" : "Accordion__closed"}`}
              >
                <span> {item.body}</span>
              </div>
            </div>
          ))}
        </div>

        {/* <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm> */}
      </div>
    </div>
  );
}

export default Accordion;
