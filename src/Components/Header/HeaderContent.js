import "./Header.css";
import OptForm from "../OptForm/OptForm";

function HeaderContent() {
  return (
    <div className="Header__Content">
      <div className="Header__Title">
        Unlimited films, TV programmes and more.
      </div>
      <div className="Header__SubTitle">
        Watch anywhere. Cancel at any time.
      </div>
      <OptForm />
    </div>
  );
}

export default HeaderContent;
