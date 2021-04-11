import React from "react";
import { Home } from "../../pages";
import { render } from "@testing-library/react";

jest.mock("react-router-dom");

describe("Homepage", () => {
  test("renders the homepage", () => {
    const { getAllByText, getByText, getAllByPlaceholderText } = render(
      <Home />
    );

    expect(getByText("Unlimited films, TV programmes and more.")).toBeTruthy();
    expect(getByText("Watch anywhere. Cancel at anytime.")).toBeTruthy();
    expect(
      getAllByText(
        "Ready to watch? Enter your email to create or restart your membership"
      )
    ).toBeTruthy();
    expect(getAllByText("Try it now")).toBeTruthy();
    expect(getAllByPlaceholderText("Email address")).toBeTruthy();
  });
});
