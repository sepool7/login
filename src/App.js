import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import Login from "./views/Login"; // Ensure this import
import { useAuth0 } from "@auth0/auth0-react";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/external-api" component={ExternalApi} />
            <Route path="/login" component={Login} /> {/* Ensure this route */}
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
