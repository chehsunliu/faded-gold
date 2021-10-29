import { SWD2E } from "fadedgold/pages/swd2e";
import { SWD3E } from "fadedgold/pages/swd3e";
import { Home } from "fadedgold/pages/Home";
import { ReactElement } from "react";

export type RoutingItems = { [key: string]: RoutingItem };

interface RoutingItem {
  url: string;
  element: () => ReactElement;
}

export const routingItems: { [key: string]: RoutingItem } = {
  home: {
    url: "/",
    element: () => <Home />,
  },
  swd2e: {
    url: "/games/swd2e",
    element: () => <SWD2E />,
  },
  swd3e: {
    url: "/games/swd3e",
    element: () => <SWD3E />,
  },
};
