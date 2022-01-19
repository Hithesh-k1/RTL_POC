import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Header from "../Header";


it("should render header", () => {
  render(<Header />);
  screen.getByText()
});
