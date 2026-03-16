import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MealAutopilotSupportPage from "./page";

describe("MealAutopilotSupportPage", () => {
  it("renders the published support contact details", () => {
    render(<MealAutopilotSupportPage />);

    expect(
      screen.getByRole("heading", { level: 3, name: "Operator" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Support phone:/)).toBeInTheDocument();
    expect(
      screen.getByText(/〒152-0035 東京都目黒区自由が丘二丁目16番12号 RJ3/),
    ).toBeInTheDocument();
  });
});
