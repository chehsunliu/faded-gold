import React from "react";
import { INavLink, INavLinkGroup, INavStyles, Nav } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import { RoutingItems } from "fadedgold/routingConfig";
import { useTranslation } from "react-i18next";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    boxSizing: "border-box",
    border: "1px solid #eee",
  },
};

interface SideBarProps {
  routingItems: RoutingItems;
}

export const SideBar = (props: SideBarProps) => {
  const { routingItems } = props;
  const navigate = useNavigate();
  const { t } = useTranslation("translation", {keyPrefix: "menu"});

  const handleClick = (e?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    if (e === undefined || item === undefined) {
      return;
    }

    e.preventDefault();
    navigate(item.url);
  };

  const links: INavLink[] = Object.entries(routingItems).map(([key, item]) => ({
    name: t(key),
    url: item.url,
    key: key,
  }));

  const navGroups: INavLinkGroup[] = [{ links: links }];

  return (
    <Nav groups={navGroups} styles={navStyles} onLinkClick={handleClick} />
  );
};
