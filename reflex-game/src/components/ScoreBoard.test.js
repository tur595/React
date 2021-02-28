import { render, fireEvent, getByText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScoreBoard from "./ScoreBoard";

test("renders the correct content", () => {
  const { getByText } = render(<ScoreBoard />);

  getByText("Scoreboard");
  getByText("Search players:");
});

test("user can search for players", async () => {
  const { getByTestId } = render(<ScoreBoard />);

  await userEvent.type(getByTestId("searchbox"), "asd");
  expect(getByTestId("searchbox")).not.toBe(null);
});
