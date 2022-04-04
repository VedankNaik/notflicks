import React from "react";
import Jumbotron from "../Components/Jumbotron/Jumbotron";
import Footer from "../Components/Footer/Footer";
import Accordion from "../Components/Accordion/Accordion";
import OptForm from "../Components/OptForm/OptForm";
import Header from "../Components/Header/Header";
import HeaderContent from "../Components/Header/HeaderContent";

function Home() {
  return (
    <div>
      <Header children={<HeaderContent />} />
      <Jumbotron />
      <Accordion />
      <OptForm />
      <Footer />
    </div>
  );
}

export default Home;
