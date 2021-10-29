import { RoutingPageProps } from "fadedgold/routingConfig";
import { Heading1 } from "fadedgold/component/text";

export function SWD2E(props: RoutingPageProps) {
  const { title } = props;
  return (
    <>
      <Heading1>{title}</Heading1>
    </>
  );
}
