import React from "react";
import { CustomProvider } from "rsuite";
import { useEffect, useState } from "react";
// import { Toggle } from "rsuite";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Theme() {
  const [toggleMode, setToggleMode] = useState(
    localStorage.getItem("toggle-mode") === "true"
  );
  useEffect(() => {
    localStorage.setItem("toggle-mode", toggleMode);
  }, [toggleMode]);
  const toggleModeFunc = () => {
    setToggleMode(!toggleMode);
  };
  return (
    <CustomProvider theme={toggleMode ? "dark" : "light"}>
      <button
        style={{
          backgroundColor: "transparent",
          padding: "10px",
          margin: "-20px",
        }}
        onClick={toggleModeFunc}
      >
        {" "}
        {toggleMode ? (
          <MdDarkMode pulse size={30} />
        ) : (
          <MdLightMode size={30} />
        )}
        {/* <Toggle size="lg" checkedChildren="Open" unCheckedChildren="Close" /> */}
      </button>
    </CustomProvider>
  );
}

export default Theme;
