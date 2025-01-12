import React from "react";

// This hook is used to determine if the window is focused or not.
// It is useful for determining if the user is currently interacting with the window.
export function useWindowFocusVisible() {
  const [focusVisible, setFocusVisible] = React.useState(false);
  const [visible, setVisible] = React.useState(!document.hidden);

  const handleWindowFocus = () => {
    setFocusVisible(true);
  };
  const handleWindowBlur = () => {
    setFocusVisible(false);
  };
  const handleVisibilityChange = () => {
    setVisible(!document.hidden);
  };

  React.useEffect(() => {
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return visible && focusVisible;
}
