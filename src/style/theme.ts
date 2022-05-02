export const shadow = {
  dark: "0px 0px 20px 3px rgba(97,97,97,0.8)",
  base: "0 3px 4px -1px rgba(222, 222, 222, 0.2)",
};

export const color = {
  primary: {
    dark: "#d32e3c",
    base: "#ec3655",
    light: "#ea707a",
  },
  grey: {
    dark: "#606060",
    base: "#D9D9D9",
    light: "#F5F5F5",
  },
  white: "#fff",
  error: "#E1534B",
};

export const space = {
  xxs: "4px",
  xs: "8px",
  small: "12px",
  base: "16px",
  medium: "24px",
  large: "32px",
  xl: "48px",
  xxl: "60px",
  giant: "72px",
};

export const radius = {
  base: "2px",
  large: "4px",
};

export type fontWeight = 400 | 600 | 700 | 800;

type FontType = {
  weight: Record<"normal" | "bold" | "boldest", fontWeight>;
};

export const font: FontType = {
  weight: {
    normal: 400,
    bold: 600,
    boldest: 800,
  },
};

export const device = {
  mobile: 480,
  portraitTablet: 768,
  landscapeTablet: 1024,
  desktop: 1200,
};

export const theme = {
  shadow,
  color,
  space,
  radius,
  font,
  device,
};
