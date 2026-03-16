import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import MealAutopilotSupportPage from "./page";

describe("MealAutopilotSupportPage", () => {
  it("renders the support page content", () => {
    render(<MealAutopilotSupportPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Meal Autopilot" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/help with access, billing/i)).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Billing and cancellation")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<MealAutopilotSupportPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
