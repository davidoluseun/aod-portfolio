import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
import { GlobalStyleProps } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "480px",
  md: "600px",
  lg: "960px",
  xl: "1280px",
});

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("#fff", "#090c10")(props),
      color: mode("#000", "#fff")(props),
      fontSize: "18px",
    },

    button: {
      bg: "#1975d2 !important",
      color: "#fff",
      _focus: {
        boxShadow: mode(
          "0 0 0 2px #000 !important",
          " 0 0 0 2px #fff !important"
        )(props),
      },
    },

    a: {
      _focus: {
        boxShadow: mode(
          "0 0 0 2px #000 !important",
          " 0 0 0 2px #fff !important"
        )(props),
      },
    },
  }),
};

const theme = extendTheme({
  breakpoints,
  styles,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    dark: "#090c10",
    light: "c9d1d9",
    darkV: "#0d1117",
    borderDark: "#30363d",
    borderLight: "rgba(0, 0, 0, 0.3)",
    primary: "#1976d2",
    linkedin: "#0a66c2",
    twitter: "#1da1f2",
    githubLight: "#f0f6fc",
    githubDark: "#161b22",
    error: "#ff3548",
  },
});

export default theme;