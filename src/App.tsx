import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { HeroesProvider } from "./contexts/HeroesContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <HeroesProvider>
          <Router />
        </HeroesProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>)
}

export default App
