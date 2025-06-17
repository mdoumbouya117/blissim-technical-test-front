import React from "react";
import { render, screen } from "@testing-library/react";
import BlissimBanner from "./BlissimBanner";

describe("BlissimBanner", () => {
  it("renders with default props", () => {
    render(<BlissimBanner />);

    expect(
      screen.getByText("Un accompagnement sur-mesure")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Blissim c'est une box mensuelle sans engagement/i)
    ).toBeInTheDocument();
    expect(screen.getByText("10 ans d'expertise beauté")).toBeInTheDocument();
  });

  it("renders with custom features", () => {
    const customFeatures = [
      {
        id: 1,
        title: "Custom Feature",
        content: "Custom content",
      },
    ];

    render(<BlissimBanner features={customFeatures} />);

    expect(screen.getByText("Custom Feature")).toBeInTheDocument();
    expect(screen.getByText("Custom content")).toBeInTheDocument();
    expect(
      screen.queryByText("Un accompagnement sur-mesure")
    ).not.toBeInTheDocument();
  });
});
