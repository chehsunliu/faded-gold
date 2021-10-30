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
    padding: 10,
  },
};

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Stack horizontal>
        <Stack.Item styles={sidebarStackItemStyles}>
          <SideBar routingItems={routingItems} />
        </Stack.Item>
        <Stack.Item styles={contentStackItemStyles}>
          <Content routingItems={routingItems} />
        </Stack.Item>
      </Stack>
    </Suspense>
  );
}

export default App;
