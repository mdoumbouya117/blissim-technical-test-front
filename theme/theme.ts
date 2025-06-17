import { createTheme } from "@mui/material/styles";

const COLORS = {
  primaryDark: "#283149",
  secondaryDark: "#404b69",
} as const;

const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.primaryDark,
    },
    secondary: {
      main: COLORS.secondaryDark,
    },
    /* to be fixed => 'accent' & 'lignt' does not exist in type 'PaletteOptions' */
    // accent: '#00818a',
    // light: '#dbedf3',
  },
  spacing: 8,
});

// Colors
// #00818a
// #dbedf3

export default theme;
