import "./App.css";
import Sidebar from "./components/Sidebar";
import Timer from "./components/Timer";
import Wecker from "./components/Wecker";
import Uhrzeit from "./components/Uhrzeit";
import Stoppuhr from "./components/Stoppuhr";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar className="sidebar" />
        <div className="main">
          <Switch>
            <Route path="/Timer-Pomodoro">
              <Timer />
            </Route>
            <Route path="/Wecker">
              <Wecker />
            </Route>
            <Route path="/Uhrzeit">
              <Uhrzeit />
            </Route>
            <Route path="/Stoppuhr">
              <Stoppuhr />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
