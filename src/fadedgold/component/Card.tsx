import React, { useState } from "react";
import { useTheme } from "@fluentui/react";

interface CardProps {
  width: number;
  children: React.ReactNode;
}

export const Card = (props: CardProps) => {
  const { palette } = useTheme();
  const [isMouseInside, setIsMouseInside] = useState(false);

  const styles: React.CSSProperties = {
    width: props.width,
    padding: "20px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: isMouseInside
      ? palette.themePrimary
      : palette.neutralQuaternary,
  };

  const handleMouseEnter = () => {
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles}
    >
      {props.children}
    </div>
  );
};
