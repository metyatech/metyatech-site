import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MealAutopilotPage from "./page";

describe("MealAutopilotPage", () => {
  it("renders the product summary and support link", () => {
    render(<MealAutopilotPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Meal Autopilot" }),
    ).toBeInTheDocument();
    expect(screen.getByText("¥680 / month")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Contact support" }),
    ).toHaveAttribute("href", "/meal-autopilot/support");
    expect(screen.getByText("Billing and cancellation")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Customers are charged immediately at checkout for a monthly recurring subscription\./,
      ),
    ).toBeInTheDocument();
  });
});
