import { render } from "@testing-library/react";

import TopScores from "./TopScores";

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<TopScores />);

  getByText("Top Scores:");
});
