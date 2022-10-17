import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

class ThemeButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;

    return (
      <button
        {...props}
        style={{
          color: theme.foreground,
          backgroundColor: theme.background,
        }}
        onClick={props.changeTheme}
      >
        Button
      </button>
    );
  }
}

ThemeButton.contextType = ThemeContext;

export default ThemeButton;
