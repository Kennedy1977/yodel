import React from "react";
import { createContainer } from "../../test/domManipulators";
import Form from "./Form";

describe("Form", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it("renders App", () => {
    render(<Form />);
    expect(container.querySelector("div")).not.toBeNull();
  });

  it("Form to contain <form> tag", () => {
    render(<Form />);
    expect(container.querySelector("form")).not.toBeNull();
  });

  it("Form to contain submit <button>", () => {
    render(<Form />);
    expect(container.querySelector('[type="submit"]')).not.toBeNull();
  });

  it("Form to contain input InterestA", () => {
    render(<Form />);
    expect(container.querySelector('[name="interestA"]')).not.toBeNull();
  });

  it("Form to contain input InterestB", () => {
    render(<Form />);
    expect(container.querySelector('[name="interestB"]')).not.toBeNull();
  });

  it("Form to contain input InterestC", () => {
    render(<Form />);
    expect(container.querySelector('[name="interestC"]')).not.toBeNull();
  });

  it("Form to contain input transaction", () => {
    render(<Form />);
    expect(container.querySelector('[name="transaction"]')).not.toBeNull();
  });
});
