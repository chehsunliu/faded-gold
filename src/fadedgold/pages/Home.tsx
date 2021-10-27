import { RoutingPageProps } from "fadedgold/routingConfig";
import { Heading1, Paragraph } from "fadedgold/component/text";

export const Home = (props: RoutingPageProps) => {
  const { title } = props;
  return (
    <>
      <Heading1>{title}</Heading1>
      <Paragraph>
        Limited usage, use in places where text is mandatory and space is tight.
        For example, it is used for any disclaimer text that may appear in a
        purchase flow. It’s also used as the initials in a list of SharePoint
        sites in the left nav. Recommended line height is 14px.
      </Paragraph>
    </>
  );
};
