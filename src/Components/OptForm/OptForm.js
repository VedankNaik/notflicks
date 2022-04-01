import React from "react";
import "./OptForm.css";

function OptForm() {
  return (
    <div className="OptForm__Container">
      <input className="OptForm__Input" placeholder="Email address" />
      <div className="OptForm__Button">Try it now</div>
      <div className="OptForm__Break" />
      <div className="OptForm__Text">
        Ready to watch? Enter your email to create or restart your membership.
      </div>
    </div>
  );
}

export default OptForm;
