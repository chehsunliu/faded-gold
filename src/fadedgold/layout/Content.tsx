import { RoutingItems } from "fadedgold/routingConfig";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heading1 } from "fadedgold/component/text";
import { IStackStyles, IStackTokens, Stack } from "@fluentui/react";

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

export const Content = (props: ContentProps) => {
  const { routingItems } = props;
  const { t } = useTranslation("translation", {keyPrefix: "menu"});

  const routes = Object.entries(routingItems).map(([key, item]) => {
    const element = (
      <Stack tokens={stackTokens} styles={stackStyles}>
        <Heading1>{t(key)}</Heading1>
        {item.element()}
      </Stack>
    );
    return <Route key={key} path={item.url} element={element} />;
  });

  return <Routes>{routes}</Routes>;
};
