import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { THEME } from "../../utils/constants/app-constants";
import { LocalStorageProvider } from "../storage/local-storage-provider";

const ThemeContext = createContext(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = LocalStorageProvider.get(THEME);
    return savedTheme || "light";
  });

  useEffect(() => {
    document.body.className = theme + "-theme";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      LocalStorageProvider.set(THEME, newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeContext, useTheme, ThemeProvider };
