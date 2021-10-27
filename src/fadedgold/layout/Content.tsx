import { RoutingItems } from "fadedgold/routingConfig";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ContentProps {
  routingItems: RoutingItems;
}

export const Content = (props: ContentProps) => {
  const { routingItems } = props;
  const { t } = useTranslation("menu");

  const routes = Object.entries(routingItems).map(([key, item]) => {
    const element = <item.pageType title={t(key)} />;
    return <Route key={key} path={item.url} element={element} />;
  });

  return <Routes>{routes}</Routes>;
};
