import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Signin from "../Components/Forms/SigninForm";

function SignIn() {
  return (
    <div>
      <Header children={<Signin />} />
      <Footer />
    </div>
  );
}

export default SignIn;
