import { ITextProps, Text } from "@fluentui/react";

export const Heading1 = (props: ITextProps) => {
  return <Text {...props} variant={"mega"} block />;
};

export const Heading2 = (props: ITextProps) => {
  return <Text {...props} variant={"xxLarge"} block />;
};

export const Heading3 = (props: ITextProps) => {
  return <Text {...props} variant={"xLarge"} block />;
};

export const Paragraph = (props: ITextProps) => {
  return <Text {...props} block />;
};
