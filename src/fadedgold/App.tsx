import React, { Suspense } from "react";
import { IStackTokens, Stack } from "@fluentui/react";
import { SideBar } from "fadedgold/layout/SideBar";
import { Content } from "fadedgold/layout/Content";
import { routingItems } from "fadedgold/routingConfig";

const themedMediumStackTokens: IStackTokens = {
  childrenGap: "m",
  padding: "m",
};

function App() {
  return (
    <>
      <Stack horizontal disableShrink>
        <Stack tokens={themedMediumStackTokens}>
          <Suspense fallback={<div>Loading</div>}>
            <SideBar routingItems={routingItems} />
          </Suspense>
        </Stack>
        <Stack tokens={themedMediumStackTokens}>
          <Suspense fallback={<div>Loading</div>}>
            <Content routingItems={routingItems} />
          </Suspense>
        </Stack>
      </Stack>
    </>
  );
}

export default App;
