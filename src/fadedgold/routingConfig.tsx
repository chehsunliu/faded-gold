import { SWD2E } from "fadedgold/pages/swd2e";
import { SWD3E } from "fadedgold/pages/swd3e";
import React from "react";
import { Home } from "fadedgold/pages/Home";

export interface RoutingPageProps {
  title: string;
}

export type RoutingItems = { [key: string]: RoutingItem };

interface RoutingItem {
  url: string;
  pageType: React.ComponentType<RoutingPageProps>;
}

export const routingItems: { [key: string]: RoutingItem } = {
  home: {
    url: "/",
    pageType: Home,
  },
  swd2e: {
    url: "/games/swd2e",
    pageType: SWD2E,
  },
  swd3e: {
    url: "/games/swd3e",
    pageType: SWD3E,
  },
};
