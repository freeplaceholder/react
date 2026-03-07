import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { configure } from "@freeplaceholder/core";
import { Avatar } from "../src/avatar";

describe("Avatar component", () => {
  beforeEach(() => {
    configure({ baseUrl: "https://freeplaceholder.com" });
  });

  it("renders an img element", () => {
    render(<Avatar name="John Doe" />);
    const img = screen.getByRole("img");
    expect(img.tagName).toBe("IMG");
  });

  it("sets correct src with name", () => {
    render(<Avatar name="John Doe" />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toContain("/avatar/John%20Doe");
  });

  it("sets default alt text to name", () => {
    render(<Avatar name="Jane Smith" />);
    expect(screen.getByRole("img").getAttribute("alt")).toBe("Jane Smith");
  });

  it("uses custom alt text", () => {
    render(<Avatar name="Jane Smith" alt="Profile photo" />);
    expect(screen.getByRole("img").getAttribute("alt")).toBe("Profile photo");
  });

  it("defaults size to 128", () => {
    render(<Avatar name="Test" />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("width")).toBe("128");
    expect(img.getAttribute("height")).toBe("128");
  });

  it("uses custom size", () => {
    render(<Avatar name="Test" size={64} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("width")).toBe("64");
    expect(img.getAttribute("height")).toBe("64");
  });

  it("applies lazy loading by default", () => {
    render(<Avatar name="Test" />);
    expect(screen.getByRole("img").getAttribute("loading")).toBe("lazy");
  });

  it("does not apply loading when lazy is false", () => {
    render(<Avatar name="Test" lazy={false} />);
    expect(screen.getByRole("img").getAttribute("loading")).toBeNull();
  });

  it("sets inline placeholder SVG background when lazy", () => {
    render(<Avatar name="Test" lazy={true} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("style")).toContain("background-image");
  });

  it("does not set inline placeholder background when lazy is false", () => {
    render(<Avatar name="Test" lazy={false} />);
    const style = screen.getByRole("img").getAttribute("style") ?? "";
    expect(style).not.toContain("background-image");
  });

  it("includes bg color in inline placeholder SVG", () => {
    render(<Avatar name="Test" bg="10b981" lazy={true} />);
    const style = screen.getByRole("img").getAttribute("style") ?? "";
    expect(style).toContain("%2310b981");
  });

  it("includes bg in src URL", () => {
    render(<Avatar name="Test" bg="10b981" />);
    expect(screen.getByRole("img").getAttribute("src")).toContain("bg=10b981");
  });

  it("includes gradient params in src URL", () => {
    render(<Avatar name="Test" gradient="radial" from="ff0000" to="0000ff" />);
    const src = screen.getByRole("img").getAttribute("src") ?? "";
    expect(src).toContain("gradient=radial");
    expect(src).toContain("from=ff0000");
    expect(src).toContain("to=0000ff");
  });

  it("includes gradient via in src URL", () => {
    render(<Avatar name="Test" gradient="to-b" from="ff0000" via="00ff00" to="0000ff" />);
    expect(screen.getByRole("img").getAttribute("src")).toContain("via=00ff00");
  });

  it("passes className to img element", () => {
    render(<Avatar name="Test" className="rounded-full" />);
    expect(screen.getByRole("img").getAttribute("class")).toBe("rounded-full");
  });

  it("passes extra style alongside placeholder background when lazy", () => {
    render(<Avatar name="Test" lazy={true} style={{ opacity: 0.8 }} />);
    const style = screen.getByRole("img").getAttribute("style") ?? "";
    expect(style).toContain("background-image");
    expect(style).toContain("opacity");
  });

  it("passes only custom style when not lazy", () => {
    render(<Avatar name="Test" lazy={false} style={{ opacity: 0.8 }} />);
    const style = screen.getByRole("img").getAttribute("style") ?? "";
    expect(style).not.toContain("background-image");
    expect(style).toContain("opacity");
  });

  it("forwards extra HTML attributes", () => {
    render(<Avatar name="Test" data-testid="my-avatar" />);
    expect(screen.getByTestId("my-avatar")).toBeDefined();
  });

  it("uses ref to access the img element", () => {
    const ref = React.createRef<HTMLImageElement>();
    render(<Avatar name="Test" ref={ref} />);
    expect(ref.current?.tagName).toBe("IMG");
  });
});
