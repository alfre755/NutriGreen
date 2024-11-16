import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/theme.config";
import SimpleRouterApp from "./SimpleRouterApp";
import MainView from "../components/LayaoutTemplate/MainView";
import "./App.css";
import DataProvider from "../hooks/useData";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <MainView>
            <SimpleRouterApp />
          </MainView>
        </DataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
