import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeButton2(props) {
  const theme = useContext(ThemeContext);

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
