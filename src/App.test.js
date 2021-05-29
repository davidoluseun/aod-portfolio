import { render, screen } from "@testing-library/react";
import Hero from "./components/Hero";

describe("<App />", () => {
  it("Renders <Hero /> component", () => {
    render(<Hero />);
    const headlineTwoElement = screen.getByText(/A. David Oluseun./i);
    expect(headlineTwoElement).toBeInTheDocument();
  });
});
