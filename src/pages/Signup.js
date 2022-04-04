import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Signup from "../Components/Forms/SignupForm";

function SignUp() {
  return (
    <div>
      <Header children={<Signup />} />
      <Footer />
    </div>
  );
}

export default SignUp;
