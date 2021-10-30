import React, { FC, ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";
import { setIconOptions } from "@fluentui/style-utilities";
import "fadedgold/i18n";

setIconOptions({
  disableWarnings: true,
});

const allProviders: FC = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: allProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
