import "./Header.css";
import { useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="header">
      <h1 className="header__name">Wecker</h1>
      <div className="header__right">
        <IconButton>
          <SettingsIcon className="header__Icon" />
        </IconButton>
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <Brightness4Icon className="header__Icon" />
          ) : (
            <Brightness7Icon className="header__Icon" />
          )}
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
