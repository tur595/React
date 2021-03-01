import { fireEvent, render } from "@testing-library/react";

import Game from "./Game";
import App from "../App";
import Home from "./pages/Home";

test("user is able to interact with the block", () => {
  const { getByTestId, getByText } = render(
    <App>
      <Home>
        <Game />
      </Home>
    </App>
  );

  expect(fireEvent.click(getByTestId("block"))).toBeTruthy();
  getByText("Submit score and play again");
});
