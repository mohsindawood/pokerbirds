import PropTypes from "prop-types";
import { createContext } from "react";
// hooks
import useLocalStorage from "../hooks/useLocalStorage";
// theme
import palette from "../theme/palette";

// ----------------------------------------------------------------------

const PRIMARY_COLOR = [
  // DEFAULT
  {
    name: "default",
    ...palette.light.primary,
  },
  // PURPLE
  {
    name: "purple",
    lighter: "#EBD6FD",
    light: "#B985F4",
    main: "#7635DC",
    dark: "#431A9E",
    darker: "#200A69",
    contrastText: "#fff",
  },
  // CYAN
  {
    name: "cyan",
    lighter: '#C8FACD',
    light: '#fa6e6e',
    main: '#FF3030',
    dark: '#bf1f1f',
    darker: '#005249',
    contrastText: "#fff",
  },
  // BLUE
  {
    name: "blue",
    lighter: "#CCDFFF",
    light: "#6697FF",
    main: "#0D44FB",
    dark: "#0027B7",
    darker: "#00137A",
    contrastText: "#fff",
  },
  // ORANGE
  {
    name: "orange",
    lighter: "#FEF4D4",
    light: "#FED680",
    main: "#FDA92E",
    dark: "#B66816",
    darker: "#793908",
    contrastText: palette.light.grey[800],
  },
  // GREEN
  {
    name: "green",
    lighter: "#FFE3D5",
    light: "#FFC1AC",
    main: "#18AB56",
    dark: "#B71833",
    darker: "#7A0930",
    contrastText: "#fff",
  },
];

SetColor.propTypes = {
  themeColor: PropTypes.oneOf([
    "default",
    "purple",
    "cyan",
    "blue",
    "orange",
    "green",
  ]),
};

function SetColor(themeColor) {
  let color;
  const DEFAULT = PRIMARY_COLOR[0];
  const PURPLE = PRIMARY_COLOR[1];
  const CYAN = PRIMARY_COLOR[2];
  const BLUE = PRIMARY_COLOR[3];
  const ORANGE = PRIMARY_COLOR[4];
  const RED = PRIMARY_COLOR[5];

  switch (themeColor) {
    case "purple":
      color = PURPLE;
      break;
    case "cyan":
      color = CYAN;
      break;
    case "blue":
      color = BLUE;
      break;
    case "orange":
      color = ORANGE;
      break;
    case "green":
      color = RED;
      break;
    default:
      color = DEFAULT;
  }
  return color;
}

// const isDarkMode =
//   typeof window !== "undefined" &&
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

const initialState = {
  themeMode: "light",
  themeDirection: "ltr",
  themeColor: "default",
  themeStretch: false,
  onChangeMode: () => { },
  onChangeDirection: () => { },
  onChangeColor: () => { },
  onToggleStretch: () => { },
  setColor: PRIMARY_COLOR[0],
  colorOption: [],
};

const SettingsContext = createContext(initialState);

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    themeDirection: initialState.themeDirection,
    themeColor: initialState.themeColor,
    themeStretch: initialState.themeStretch,
  });

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  const onChangeDirection = (event) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  const onChangeColor = (event) => {
    setSettings({
      ...settings,
      themeColor: event.target.value,
    });
  };

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
        // Direction
        onChangeDirection,
        // Color
        onChangeColor,
        setColor: SetColor(settings.themeColor),
        colorOption: PRIMARY_COLOR.map((color) => ({
          name: color.name,
          value: color.main,
        })),
        // Stretch
        onToggleStretch,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
