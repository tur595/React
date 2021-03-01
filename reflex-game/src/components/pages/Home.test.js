import { render, fireEvent } from "@testing-library/react";

import Home from "./Home";
import App from "../../App";

test("renders the correct content", () => {
  const { getByText } = render(<Home />);

  getByText("Your Name");
  getByText("Let's Play");
});

test("users are able to enter their name", () => {
  const { getByTestId } = render(
    <App>
      <Home />
    </App>
  );

  fireEvent.change(getByTestId("player-name"), { target: { value: "asd" } });
  expect(getByTestId("player-name").value).toBe("asd");
});
