import React from "react";
import ReactTestUtils from "react-dom/test-utils";
import { createContainer } from "../../test/domManipulators";
import { InputText } from "./InputText";

describe("InputText", () => {
  let render, container;

  beforeEach(() => {
    ({ render, container } = createContainer());
  });

  it("renders InputText", () => {
    render(<InputText />);
    expect(container.querySelector("div")).not.toBeNull();
  });

  it("should render a label", () => {
    const labelValue = "Example label";
    render(<InputText label={labelValue} />);
    const label = container.querySelector("label");
    expect(label).not.toBeNull();
    expect(label.textContent).toEqual("Example label");
  });

  it("should render a input", () => {
    const labelValue = "Example label";
    const value = "10";
    const name = "example";
    render(<InputText label={labelValue} value={value} name={name} />);
    const field = container.querySelector("input");
    expect(field).not.toBeNull();
    expect(field.name).toEqual("example");
    expect(field.value).toEqual("10");
  });

  
