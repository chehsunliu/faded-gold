import { RoutingItems } from "fadedgold/routingConfig";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Heading1 } from "fadedgold/component/text";

interface ContentProps {
  routingItems: RoutingItems;
}

export const Content = (props: ContentProps) => {
  const { routingItems } = props;
  const { t } = useTranslation("menu");

  const routes = Object.entries(routingItems).map(([key, item]) => {
    const element = (
      <>
        <Heading1>{t(key)}</Heading1>
        {item.element()}
      </>
    );
    return <Route key={key} path={item.url} element={element} />;
  });

  return <Routes>{routes}</Routes>;
};
