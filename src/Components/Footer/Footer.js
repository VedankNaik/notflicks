import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Container">
      <p className="Title">Questions? Contact us.</p>
      <div className="Break" />
      <div className="Row">
        <div className="Column">
          <a className="Link" href="/">
            FAQ
          </a>
          <a className="Link" href="/">
            Investor Relations
          </a>
          <a className="Link" href="/">
            Ways to Watch
          </a>
          <a className="Link" href="/">
            Corporate Information
          </a>
          <a className="Link" href="/">
            Notflicks Originals
          </a>
        </div>

        <div className="Column">
          <a className="Link" href="/">
            Help Centre
          </a>
          <a className="Link" href="/">
            Jobs
          </a>
          <a className="Link" href="/">
            Terms of Use
          </a>
          <a className="Link" href="/">
            Contact Us
          </a>
        </div>

        <div className="Column">
          <a className="Link" href="/">
            Account
          </a>
          <a className="Link" href="/">
            Redeem gift cards
          </a>
          <a className="Link" href="/">
            Privacy
          </a>
          <a className="Link" href="/">
            Speed Test
          </a>
        </div>

        <div className="Column">
          <a className="Link" href="/">
            Media Centre
          </a>
          <a className="Link" href="/">
            Buy gift cards
          </a>
          <a className="Link" href="/">
            Cookie Preferences
          </a>
          <a className="Link" href="/">
            Legal Notices
          </a>
        </div>
      </div>
      <div className="Break"></div>
      <p className="Text">Notflicks</p>
    </div>
  );
}

export default Footer;
