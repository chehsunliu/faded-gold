import React from "react";
import { render, screen } from "fadedgold/test-utils";
import App from "fadedgold/App";

test("renders 123", () => {
  render(<App />);
  const linkElement = screen.getByText(/123/i);
  expect(linkElement).toBeInTheDocument();
});
