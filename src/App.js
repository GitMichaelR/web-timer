import "./App.css";
import Wetter from "./components/Wetter";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Timer from "./components/Timer";
import Wecker from "./components/Wecker";
import Uhrzeit from "./components/Uhrzeit";
import Stoppuhr from "./components/Stoppuhr";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar className="sidebar" />
        <div className="main">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="Wetter">
              <Wetter />
            </Route>
            <Route path="Timer-Pomodoro">
              <Timer />
            </Route>
            <Route path="Wecker">
              <Wecker />
            </Route>
            <Route path="Uhrzeit">
              <Uhrzeit />
            </Route>
            <Route path="Stoppuhr">
              <Stoppuhr />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
