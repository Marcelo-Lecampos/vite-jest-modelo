import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Jest", () => {
  it("should work", () => {
    expect(1).toBe(1);
  });
  it("should display the element", () => {
    render(<App />);

    screen.debug()
  });
});
