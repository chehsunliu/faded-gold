import React from "react";
import { render, screen } from "@testing-library/react";
import App from "grownupsavior/App";

test("renders 123", () => {
  render(<App />);
  const linkElement = screen.getByText(/123/i);
  expect(linkElement).toBeInTheDocument();
});
