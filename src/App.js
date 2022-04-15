import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home, Browse, SignIn, SignUp } from "./pages";
import * as ROUTES from "./constants/routes";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

function App() {
  const { user } = useAuthListener();
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path={ROUTES.HOME}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                <Home />
              </IsUserRedirect>
            }
          />
          <Route
            exact
            path={ROUTES.SIGN_IN}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                <SignIn />
              </IsUserRedirect>
            }
          />
          <Route
            exact
            path={ROUTES.SIGN_UP}
            element={
              <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE}>
                <SignUp />
              </IsUserRedirect>
            }
          />
          <Route
            exact
            path={ROUTES.BROWSE}
            element={
              <ProtectedRoute user={user}>
                <Browse />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
