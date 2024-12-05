import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../utils/theme.config";
import SimpleRouterApp from "./SimpleRouterApp";
import MainView from "../components/LayaoutTemplate/MainView";
import "./App.css";
import DataProvider from "../hooks/useData";
import Popup from "../components/Main/PopUp";
import { PopupProvider } from "../hooks/UsePopUp";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DataProvider>
          <PopupProvider>
          <MainView>
            <SimpleRouterApp />
          </MainView>
          <Popup />
          </PopupProvider>
        </DataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
