import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders the company overview and product links", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "metyatech" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View Meal Autopilot" }),
    ).toHaveAttribute("href", "/meal-autopilot");
    expect(screen.getAllByText("¥680 / month")).toHaveLength(2);
  });
});
