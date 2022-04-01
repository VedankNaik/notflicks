import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer__Container">
      <p className="Footer__Title">Questions? Contact us.</p>
      <div className="Footer__Break" />
      <div className="Footer__Row">
        <div className="Footer__Column">
          <a className="Footer__Link" href="/">
            FAQ
          </a>
          <a className="Footer__Link" href="/">
            Investor Relations
          </a>
          <a className="Footer__Link" href="/">
            Ways to Watch
          </a>
          <a className="Footer__Link" href="/">
            Corporate Information
          </a>
          <a className="Footer__Link" href="/">
            Notflicks Originals
          </a>
        </div>

        <div className="Footer__Column">
          <a className="Footer__Link" href="/">
            Help Centre
          </a>
          <a className="Footer__Link" href="/">
            Jobs
          </a>
          <a className="Footer__Link" href="/">
            Terms of Use
          </a>
          <a className="Footer__Link" href="/">
            Contact Us
          </a>
        </div>

        <div className="Footer__Column">
          <a className="Footer__Link" href="/">
            Account
          </a>
          <a className="Footer__Link" href="/">
            Redeem gift cards
          </a>
          <a className="Footer__Link" href="/">
            Privacy
          </a>
          <a className="Footer__Link" href="/">
            Speed Test
          </a>
        </div>

        <div className="Footer__Column">
          <a className="Footer__Link" href="/">
            Media Centre
          </a>
          <a className="Footer__Link" href="/">
            Buy gift cards
          </a>
          <a className="Footer__Link" href="/">
            Cookie Preferences
          </a>
          <a className="Footer__Link" href="/">
            Legal Notices
          </a>
        </div>
      </div>
      <div className="Footer__Break"></div>
      <p className="Footer__Text">Notflicks</p>
    </div>
  );
}

export default Footer;
