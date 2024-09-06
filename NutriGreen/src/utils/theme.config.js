import Color from "color";

const theme = {
  aspect: null,
  colors: {
    BW0: "#fff", // Blanco
    BW1: "#252525", // Casi negro
    BW2: "#707070", // Gris oscuro
    BW3: "#858585", // Gris claro
    BW4: "#b4b4b4",
    BW5: "#DBDBDB", //Gris intermedio
    BW6: "#F5F5F5", //Gris mas claro, utilizado de fondo
    buttonUnderline: "#1269CE", //Azul utilizado para subrayan botones
    primary: "#006F73", // Azul oscuro
    primary1: Color("#006F73").lightness(73).desaturate(0.545).toString(),
    primary2: Color("#006F73").lightness(90).desaturate(0.545).toString(),
    secondary: "#99AF0E", // Azul intenso
    secondary1: Color("#99AF0E").lightness(83).desaturate(0.1).toString(),
    secondary2: Color("#99AF0E").lightness(90).desaturate(0.1).toString(),
    error: "rgba(176, 0, 0)", // Rojo
  },
  dimensions: {
    borderRadius: "10px",
    buttonPadding: "0.4vmax 2.5vmax",
    navButtonPadding: ".52vmax 1.61vmax",
    sectionPaddingV: "6.6395vmin",
    sectionPaddingV2: "5.21vh",
    sectionPaddingV3: "2.7vh",
    sectionPaddingH: "10.45vw",
    fontSize1: "35px",
    fontSize2: "25px",
    fontSize3: "23px",
    fontSize4: "20px",
    fontSize5: "18px",
    fontSize6: "14px",
    fontSize7: "10px",
    mobileNavbarMaxWidth: "400px",
  },
  fonts: {
    main: "Arial",
    header: "Arial",
  },
  transition: ["400ms", "200ms", "100ms"],
  shadows: {
    main: "1px 1px 2px 1px rgba(0, 0, 0, 0.16)",
    main2: "1px 1px 4px 0px rgba(0, 0, 0, 0.16)",
    main3: "4px 4px 4px 1px rgba(0, 0, 0, 0.16)",
    inset: "inset -1px -1px 2px 1px rgba(0, 0, 0, 0.16)",
    inset2: "inset 2px 2px 4px 1px rgba(0,0,0,.16)",
    inset3: "inset 4px 4px 1px 2px rgba(0,0,0,.16)",
    none: "0px 0px 0px 0px rgba(0, 0, 0, 0.16)",
  },
  textGlow: "0px 0px 5px rgba(255, 255, 255, 0.2)",
};

export default theme;
