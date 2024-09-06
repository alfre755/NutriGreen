import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/theme.config";
import SimpleRouterApp from "./SimpleRouterApp";
import MainView from "../components/LayaoutTemplate/MainView";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainView>
          <SimpleRouterApp />
        </MainView>
      </ThemeProvider>
    </>
  );
}

export default App;
