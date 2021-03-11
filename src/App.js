import "./App.css";
import Wetter from "./components/Wetter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ToolBody from "./components/ToolBody";

function App() {
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <div className="main">
        <Header />
        <ToolBody className="toolBody" />
        <Footer />
      </div>
      {/* toolBody__Wetter */}
      {/* toolBody__Timer */}
      {/* toolBody__Interval-Timer */}
      {/* toolBody__Wecker */}
      {/* toolBody__Uhrzeit */}
      {/* toolBody__Stoppuhr */}
    </div>
  );
}

export default App;
