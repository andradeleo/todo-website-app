
import { ThemeProvider } from "styled-components";

import { Themes } from "./styles/Themes";
import { GlobalStyle } from "./styles/Common";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

import Layout from "./Components/Layout";
import { useState, useMemo } from "react";

export default  function App() {
  const [theme, setTheme] = useState("dark");

  const currentTheme = useMemo(() => {
    return Themes[theme] || Themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState) =>  prevState == "dark" ? "light" : "dark");
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle/>
      <ToastContainer autoClose={2000} position={"bottom-left"} />
      <Layout onToggleTheme={handleToggleTheme}/>
    </ThemeProvider>
  );
}
