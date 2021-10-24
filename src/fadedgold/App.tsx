import React, { ReactElement } from "react";
import { IStackTokens, Stack } from "@fluentui/react";
import { NavMenu } from "fadedgold/NavMenu";
import { Route, Routes } from "react-router-dom";
import { SWD2E } from "fadedgold/games/swd2e/SWD2E";
import { SWD3E } from "fadedgold/games/swd3e/SWD3E";

const themedMediumStackTokens: IStackTokens = {
  childrenGap: "m",
  padding: "m",
};

const routeProps: { [key: string]: ReactElement<any, any> } = {
  "/": <div>123</div>,
  "/games/swd2e": <SWD2E />,
  "/games/swd3e": <SWD3E />,
};

function App() {
  const routes = Object.entries(routeProps).map(([path, element]) => (
    <Route key={path} path={path} element={element} />
  ));

  return (
    <>
      <Stack horizontal disableShrink>
        <Stack tokens={themedMediumStackTokens}>
          <NavMenu />
        </Stack>
        <Stack tokens={themedMediumStackTokens}>
          <Routes>{routes}</Routes>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
