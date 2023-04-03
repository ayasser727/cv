import React, { useEffect } from "react";

import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";

import { ColorModeContext } from "./context";

function Theme({ children }) {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem("mode", mode === "light" ? "dark" : "light");
      },
    }),
    [mode]
  );

  useEffect(() => {
    if (localStorage.getItem("mode")) {
      let localMode = localStorage.getItem("mode");
      setMode(localMode);
    } else {
      setMode("light");
    }
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
          background: {
            paper: "#444",
          },
          primary: {
            main: "#04b4e0",
          },
          secondary: {
            main: "#fff",
          },
          text: {
            secondary: "#d5d5d5",
          },

          //   mode,
          //   ...(mode === "light"
          //     ? {
          //         primary: {
          //           main: "#a1e3d8",
          //           dark: "#66c2ff",
          //           light: "red",
          //           contrastText: "#000",
          //         },
          //         secondary: {
          //           main: "#a1e3d8",
          //           light: "#007fffc7",
          //           dark: "#0da58b",
          //           contrastText: "#005555",
          //         },
          //         text: {
          //           primary: "#ffffff",
          //           secondary: "#fff",
          //         },
          //         background: {
          //           paper: "#5cc1b0",
          //           // default: "#0000008a"
          //           secondary: "#005555",
          //         },
          //         action: {
          //           hover: "#0da58b",
          //         },
          //       }
          //     : {
          //         secondary: {
          //           main: "#a5d8ff",
          //           dark: "#a5d8ffbf",
          //         },
          //         background: {
          //           default: "#0a1929",
          //           paper: "#001e3c",
          //           secondary: "#001e3c",
          //         },
          //       }),
        },
        typography: {
          fontFamily: "Poppins, sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default Theme;
