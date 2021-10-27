import { RoutingPageProps } from "fadedgold/routingConfig";

export function SWD2E(props: RoutingPageProps) {
  const { title } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
