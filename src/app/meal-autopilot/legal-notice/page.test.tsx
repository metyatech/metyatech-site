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
    expect(
      screen.getByText("Contact phone: 050-5343-7214"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Business address: 〒152-0035 東京都目黒区自由が丘二丁目16番12号 RJ3",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Price: ¥680 per month")).toBeInTheDocument();
  });
});
