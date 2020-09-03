import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SnappedPic from "./SnappedPic";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const MyCamera = lazy(() => import("./MyCamera"));

const App: React.FC = () => {
  const [photo, setPhoto] = useState(() => undefined);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/camera">Camera</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/camera">
            <MyCamera setPhoto={setPhoto} />
          </Route>
          <Route path="/snappedPic">
            <SnappedPic photo={photo} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
