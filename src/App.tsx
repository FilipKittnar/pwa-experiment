import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SnappedPic from "./SnappedPic";
import Location from "./Location";

const Home = lazy(() => import("./Home"));
const MyCamera = lazy(() => import("./MyCamera"));

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState(() => undefined);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/camera">Camera</Link>
            </li>
            <li>
              <Link to="/location">Location</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/camera">
            <MyCamera setPhoto={setImageUrl} />
          </Route>
          <Route path="/snappedPic">
            <SnappedPic imageUrl={imageUrl} />
          </Route>
          <Route path="/location">
            <Location />
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
