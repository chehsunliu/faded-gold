import { RoutingItems } from "fadedgold/routingConfig";
import { Navigate, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heading1 } from "fadedgold/component/text";
import { IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import React, { useEffect } from "react";

interface ContentProps {
  routingItems: RoutingItems;
}

const stackTokens: IStackTokens = {
  childrenGap: 10,
};

const stackStyles: IStackStyles = {
  root: {
    display: "block",
  },
};

interface HeadingElementProps {
  title: string;
  children: React.ReactNode;
}

const HeadingElement = (props: HeadingElementProps) => {
  const { title, children } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Stack tokens={stackTokens} styles={stackStyles}>
      <Heading1>{title}</Heading1>
      {children}
    </Stack>
  );
};

export const Content = (props: ContentProps) => {
  const { routingItems } = props;
  const { t } = useTranslation("translation", { keyPrefix: "menu" });

  const defaultRoutes = [
    <Route key="home" path="/" element={<Navigate to="/games/swd3e" />} />,
  ];

  const routes = Object.entries(routingItems).map(([key, item]) => {
    const element = (
      <HeadingElement title={t(key)}>{item.element()}</HeadingElement>
    );
    return <Route key={key} path={item.url} element={element} />;
  });

  return <Routes>{defaultRoutes.concat(routes)}</Routes>;
};
