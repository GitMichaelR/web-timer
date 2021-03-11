import "./Sidebar.css";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import TimerIcon from "@material-ui/icons/Timer";
import AlarmIcon from "@material-ui/icons/Alarm";
import AvTimerIcon from "@material-ui/icons/AvTimer";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="logo">WebTimer</h1>
      <div className="links">
        <div className="border">
          <AvTimerIcon />
          <h2>Timer / Pomodoro</h2>
        </div>
        <div>
          <AlarmIcon />
          <h2>Wecker</h2>
        </div>
        <div>
          <TimerIcon />
          <h2>Stoppuhr</h2>
        </div>
        <div>
          <AccessTimeIcon />
          <h2>Uhrzeit</h2>
        </div>
        <div>
          <WbSunnyIcon />
          <h2>Wetter</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
