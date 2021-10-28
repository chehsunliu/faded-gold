import { RoutingPageProps } from "fadedgold/routingConfig";
import { Heading1 } from "fadedgold/component/text";
import { ImportButton } from "fadedgold/component/button";

export function SWD3E(props: RoutingPageProps) {
  const { title } = props;
  return (
    <>
      <Heading1>{title}</Heading1>
      <ImportButton text={"Import"} />
    </>
  );
}
