import React, { ReactElement, Suspense } from "react";
import { IStackTokens, Stack } from "@fluentui/react";
import { NavMenu } from "fadedgold/NavMenu";
import { Route, Routes } from "react-router-dom";
import { SWD2E } from "fadedgold/games/swd2e";
import { SWD3E } from "fadedgold/games/swd3e";

const themedMediumStackTokens: IStackTokens = {
  childrenGap: "m",
  padding: "m",
};

const routeProps: { [key: string]: ReactElement<any, any> } = {
  "/": <div>123</div>,
  "/games/swd2e": <SWD2E />,
  "/games/swd3e": <SWD3E />,
};

const Loading = () => <div>Loading...</div>;

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
          <Suspense fallback={<Loading />}>
            <Routes>{routes}</Routes>
          </Suspense>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
