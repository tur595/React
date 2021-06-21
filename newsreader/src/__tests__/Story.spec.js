import React from "react";
import { Story } from "../components/Story";
import { singularStory } from "../fixtures";
import { getStory } from "../services/hnApi";
import { cleanup, render, waitForElement } from "@testing-library/react";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock("../services/hnApi", () => ({
  getStory: jest.fn(),
}));

test("renders the <Story />", async () => {
  getStory.mockImplementation(() => Promise.resolve(singularStory));

  const { getByText, queryByTestId } = render(<Story storyId="1" />);
  await waitForElement(() => [
    expect(queryByTestId("story")).toBeTruthy(),
    expect(getByText("Tarnished: Google Responds")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: John Doe"),
  ]);
});
