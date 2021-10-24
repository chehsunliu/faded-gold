import React from "react";
import { INavLink, INavLinkGroup, INavStyles, Nav } from "@fluentui/react";
import { useNavigate } from "react-router-dom";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 208,
    boxSizing: "border-box",
    border: "1px solid #eee",
  },
};

const navGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home",
        url: "/",
        key: "home",
      },
      {
        name: "Games",
        url: "#",
        links: [
          {
            name: "SWD2E",
            url: "/games/swd2e",
            key: "swd2e",
          },
          {
            name: "SWD3E",
            url: "/games/swd3e",
            key: "swd3e",
          },
        ],
        isExpanded: true,
      },
    ],
  },
];

export const NavMenu = () => {
  const navigate = useNavigate();

  const handleClick = (e?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    if (e === undefined || item === undefined) {
      return;
    }

    e.preventDefault();
    navigate(item.url);
  };

  return (
    <Nav groups={navGroups} styles={navStyles} onLinkClick={handleClick} />
  );
};
