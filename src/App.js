import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Row from "./Components/Row/Row";
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Footer from "./Components/Footer/Footer";
import Accordion from "./Components/Accordion/Accordion";
import OptForm from "./Components/OptForm/OptForm";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Accordion />
      <OptForm />
      <Footer />

      {/* <NavBar />
      <Banner />
      <Row title="Top 250 Movies" url={requests.top250movies} />
      <Row title="Top 250 TV" url={requests.top250TV} />
      <Row title="Popular Movies" url={requests.popularMovies} />
      <Row title="Popular TV" url={requests.popularTV} />
      <Row title="In Theaters" url={requests.intheaters} />
      <Row title="Coming Soon" url={requests.comingSoon} />
      <Row title="Box Office" url={requests.boxOffice} />
      <Row title="Box Office All Time" url={requests.boxOfficeAllTime} /> */}
    </div>
  );
}

export default App;
