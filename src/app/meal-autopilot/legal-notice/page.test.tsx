import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MealAutopilotLegalNoticePage from "./page";

describe("MealAutopilotLegalNoticePage", () => {
  it("renders the operator and pricing disclosure", () => {
    render(<MealAutopilotLegalNoticePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Specified Commercial Transactions Act Notice",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Business name: metyatech")).toBeInTheDocument();
    expect(screen.getByText("Price: ¥680 per month")).toBeInTheDocument();
  });
});
