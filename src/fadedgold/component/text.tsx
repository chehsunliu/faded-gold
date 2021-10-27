import { ITextProps, Text } from "@fluentui/react";

export const Heading1 = (props: ITextProps) => {
  return <Text {...props} variant={"xxLarge"} block />;
};

export const Paragraph = (props: ITextProps) => {
  return <Text {...props} block />;
};
