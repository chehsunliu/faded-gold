import React, { Suspense } from "react";
import { IStackItemStyles, Stack } from "@fluentui/react";
import { SideBar } from "fadedgold/layout/SideBar";
import { Content } from "fadedgold/layout/Content";
import { routingItems } from "fadedgold/routingConfig";

const sidebarStackItemStyles: IStackItemStyles = {
  root: {
    padding: 10,
  },
};

const contentStackItemStyles: IStackItemStyles = {
  root: {
    flexShrink: "unset",
    padding: 10,
  },
};

function App() {
  return (
    <>
      <Stack horizontal disableShrink>
        <Stack.Item styles={sidebarStackItemStyles}>
          <Suspense fallback={<div>Loading</div>}>
            <SideBar routingItems={routingItems} />
          </Suspense>
        </Stack.Item>
        <Stack.Item styles={contentStackItemStyles}>
          <Suspense fallback={<div>Loading</div>}>
            <Content routingItems={routingItems} />
          </Suspense>
        </Stack.Item>
      </Stack>
    </>
  );
}

export default App;
