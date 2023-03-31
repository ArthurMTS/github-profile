import React from "react";

interface ThemeContextData {
  mode: "dark" | "light";
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext({} as ThemeContextData);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = React.useState<"dark" | "light">("dark");
  const Theme = React.useMemo(
    () => ({
      toggleTheme: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  return (
    <ThemeContext.Provider
      value={{ mode, toggleTheme: Theme.toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
