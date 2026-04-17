```tsx
interface ThemeColors {
  white: string;
  pageBackground: string;
  lightHeather: string;
  mystic: string;
  waterloo: string;
  scienceBlue: string;
  pattensBlue: string;
  silver: string;
  stormGrey: string;
  mine: string;
  shadow: string;
  darkerGrey: string;
  woodsmoke: string;
  black: string;
}

interface ThemeBreakpoint {
  tablet: number;
  mobileMax: number;
  mobileMin: number;
  fullPage: number;
}

interface ThemeSpinner {
  snuff: string;
  black: string;
}

interface Theme {
  colors: ThemeColors;
  breakpoint: ThemeBreakpoint;
  spinner: ThemeSpinner;
}

export const theme: Theme = {
  colors: {
    white: "#FFFFFF",
    pageBackground: "#F5F5FA",
    lightHeather: "rgba(186, 199, 213, 0.5)",
    mystic: "#E4E6F0",
    waterloo: "#7E839A",
    scienceBlue: "#0044CC",
    pattensBlue: "#D6E4FF",
    silver: "#C4C4C4",
    stormGrey: "#74788B",
    mine: "#333333",
    shadow: "0px 4px 12px rgba(186, 199, 213, 0.5)",
    darkerGrey: "#7E839A",
    woodsmoke: "#18181B",
    black: "#000000",
  },

  breakpoint: {
    tablet: 992,
    mobileMax: 767,
    mobileMin: 420,
    fullPage: 1200,
  },

  spinner: {
    snuff: "#DDDDEE",
    black: "#000000",
  },
};
```