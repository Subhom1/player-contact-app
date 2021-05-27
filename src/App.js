import React, { Suspense, lazy } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UserPage from "./pages/UserPage";
const HomePage = lazy(() => import("./pages/HomePage"));
export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="my-3 mx-3">Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/player/:id" component={UserPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}
