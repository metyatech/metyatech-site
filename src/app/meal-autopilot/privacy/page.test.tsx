import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import MealAutopilotPrivacyPage from "./page";

describe("MealAutopilotPrivacyPage", () => {
  it("renders the privacy policy content", () => {
    render(<MealAutopilotPrivacyPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Privacy Policy" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/metyatech handles information/i),
    ).toBeInTheDocument();
    expect(screen.getByText("1. Information we collect")).toBeInTheDocument();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(<MealAutopilotPrivacyPage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
