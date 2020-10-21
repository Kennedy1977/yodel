import React from "react";
import { createContainer } from "../test/domManipulators";
import App from "./App";

describe("App", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it("renders App", () => {
    render(<App />);
    expect(container.querySelector("div")).not.toBeNull();
  });
});
