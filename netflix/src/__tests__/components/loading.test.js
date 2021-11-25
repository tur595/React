import React from "react";
import { render } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading />", () => {
  it("renders the <Loading /> component", () => {
    const { container, getByTestId, queryAllByTestId } = render(
      <Loading src="/images/karl.png" data-testid="loading" />
    );

    expect(queryAllByTestId("loading")).toBeTruthy();
    expect(getByTestId("loading-picture")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the <Loading.ReleaseBody />", () => {
    const { container, queryAllByTestId } = render(
      <Loading.ReleaseBody data-testid="loading" />
    );

    expect(queryAllByTestId("loading")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
