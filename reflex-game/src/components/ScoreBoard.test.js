import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ScoreBoard from "./ScoreBoard";

test("renders the correct content", () => {
  const { getByText } = render(<ScoreBoard />);

  getByText("Scoreboard");
  getByText("Search players:");
});

test("user can search for players", () => {
  const { getByTestId } = render(<ScoreBoard />);

  fireEvent.change(getByTestId("searchbox"), { target: { value: "Kaan" } });
  expect(getByTestId("searchbox").value).toBe("Kaan");
});
