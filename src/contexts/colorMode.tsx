import React from "react";

interface ColorModeContextData {
  mode: "dark" | "light";
  toggleColorMode: () => void;
}

interface ColorModeProviderProps {
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext({} as ColorModeContextData);

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = React.useState<"dark" | "light">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  return (
    <ColorModeContext.Provider
      value={{ mode, toggleColorMode: colorMode.toggleColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
