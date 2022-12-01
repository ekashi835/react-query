import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("テキスト表示", () => {
    render(<App />);

    const element = screen.getByText("React + TanStack Query Tips");

    expect(element).toBeDefined();
  });
});