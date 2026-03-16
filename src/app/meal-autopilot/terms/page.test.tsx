import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import MealAutopilotTermsPage from "./page";

describe("MealAutopilotTermsPage", () => {
  it("renders the terms of service content", () => {
    render(<MealAutopilotTermsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Terms of Service" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/terms govern the use/i)).toBeInTheDocument();
    expect(screen.getByText("1. Service scope")).toBeInTheDocument();
    expect(screen.getByText("2. Subscription and billing")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<MealAutopilotTermsPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
