import { RoutingPageProps } from "fadedgold/routingConfig";

export const Home = (props: RoutingPageProps) => {
  const { title } = props;
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};