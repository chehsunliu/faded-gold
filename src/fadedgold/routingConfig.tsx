import { SWDE } from "fadedgold/pages/swde/SWDE";
import { SWD3E } from "fadedgold/pages/swd3e/SWD3E";
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
  swde: {
    url: "/games/swde",
    element: () => <SWDE />,
  },
  swd3e: {
    url: "/games/swd3e",
    element: () => <SWD3E />,
  },
};
