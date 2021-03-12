import "./Sidebar.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import TimerIcon from "@material-ui/icons/Timer";
import AlarmIcon from "@material-ui/icons/Alarm";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { useLocation, Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

function Sidebar() {
  const path = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState({
    timer: path.pathname.slice(1) === "Timer" ? true : false,
    wecker: path.pathname.slice(1) === "Wecker" ? true : false,
    stoppuhr: path.pathname.slice(1) === "Stoppuhr" ? true : false,
    uhrzeit: path.pathname.slice(1) === "Uhrzeit" ? true : false,
  });

  function changeActive(tool) {
    let copyActive = active;
    for (let key in copyActive) {
      if (key === tool) {
        copyActive[tool] = true;
      } else {
        copyActive[key] = false;
      }
    }
    setActive(copyActive);
  }

  return (
    <div className="sidebar">
      <MenuList className="menu">
        <MenuItem
          className={active.timer ? "active_link" : null}
          component={Link}
          to={"/Timer"}
          onClick={() => changeActive("timer")}
        >
          <ListItemIcon>
            <AvTimerIcon />
          </ListItemIcon>
          <ListItemText primary="Timer" />
        </MenuItem>
        <MenuItem
          className={active.wecker ? "active_link" : null}
          component={Link}
          to={"/Wecker"}
          onClick={() => changeActive("wecker")}
        >
          <ListItemIcon>
            <AlarmIcon />
          </ListItemIcon>
          <ListItemText primary="Wecker" />
        </MenuItem>
        <MenuItem
          className={active.stoppuhr ? "active_link" : null}
          component={Link}
          to={"/Stoppuhr"}
          onClick={() => changeActive("stoppuhr")}
        >
          <ListItemIcon>
            <TimerIcon />
          </ListItemIcon>
          <ListItemText primary="Stoppuhr" />
        </MenuItem>
        <MenuItem
          className={active.uhrzeit ? "active_link" : null}
          component={Link}
          to={"/Uhrzeit"}
          onClick={() => changeActive("uhrzeit")}
        >
          <ListItemIcon>
            <AccessTimeIcon />
          </ListItemIcon>
          <ListItemText primary="Uhrzeit" />
        </MenuItem>
      </MenuList>

      <div>
        <MenuList className="menu">
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <MenuItem onClick={() => setDarkMode(!darkMode)}>
            <ListItemIcon>
              {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
            </ListItemIcon>
            {darkMode ? (
              <ListItemText primary="Licht an" />
            ) : (
              <ListItemText primary="Licht aus" />
            )}
          </MenuItem>
        </MenuList>

        <footer>
          <p>© 2020 WebTimer</p>
        </footer>
      </div>
    </div>
  );
}

export default Sidebar;
