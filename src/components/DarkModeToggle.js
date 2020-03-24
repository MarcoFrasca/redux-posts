import React from "react";
import { connect } from "react-redux";
import { toggleDarkMode } from "../actions/uiActions";

const DarkModeToggle = ({ darkMode, onToggleClick }) => {
  return (
    <div className={`wrapper${darkMode ? " dark-mode" : ""}`}>
      <label htmlFor="darkmode">Dark Mode</label>
      <input
        id="darkmode"
        type="checkbox"
        onChange={onToggleClick}
        checked={darkMode}
      />
    </div>
  );
};

const mapStateToProps = ({ uiReducer }) => ({
  darkMode: uiReducer.darkMode
});

const mapDispatchToProps = dispatch => ({
  onToggleClick: () => dispatch(toggleDarkMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeToggle);
