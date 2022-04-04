import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import Row from "./Components/Row/Row";
import { Home, Browse, SignIn, SignUp } from "./pages";

import * as ROUTES from "./constants/routes";
import requests from "./requests";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path={ROUTES.HOME} element={<Home />} />
          <Route exact path={ROUTES.BROWSE} element={<Browse />} />
          <Route exact path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route exact path={ROUTES.SIGN_UP} element={<SignUp />} />
        </Routes>
      </div>
    </Router>

    // <div className="App">
    //   <Router>
    //     <Jumbotron />
    //     <Accordion />
    //     <OptForm />
    //     <Footer />

    //     {/* Continue from constant routes */}

    //     {/* <NavBar />
    //   <Banner />
    //   <Row title="Top 250 Movies" url={requests.top250movies} />
    //   <Row title="Top 250 TV" url={requests.top250TV} />
    //   <Row title="Popular Movies" url={requests.popularMovies} />
    //   <Row title="Popular TV" url={requests.popularTV} />
    //   <Row title="In Theaters" url={requests.intheaters} />
    //   <Row title="Coming Soon" url={requests.comingSoon} />
    //   <Row title="Box Office" url={requests.boxOffice} />
    //   <Row title="Box Office All Time" url={requests.boxOfficeAllTime} /> */}
    //   </Router>
    // </div>
  );
}

export default App;
