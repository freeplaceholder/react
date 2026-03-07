import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { configure } from "@freeplaceholder/core";
import { Placeholder } from "../src/placeholder";

describe("Placeholder component", () => {
  beforeEach(() => {
    configure({ baseUrl: "https://freeplaceholder.com" });
  });

  it("renders an img element", () => {
    render(<Placeholder width={600} height={400} />);
    const img = screen.getByRole("img");
    expect(img.tagName).toBe("IMG");
  });

  it("sets correct src with width and height", () => {
    render(<Placeholder width={600} height={400} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("src")).toContain("600x400");
  });

  it("sets default alt text", () => {
    render(<Placeholder width={600} height={400} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("alt")).toBe("600×400 placeholder");
  });

  it("uses custom alt text", () => {
    render(<Placeholder width={600} height={400} alt="My image" />);
    expect(screen.getByRole("img").getAttribute("alt")).toBe("My image");
  });

  it("applies lazy loading by default", () => {
    render(<Placeholder width={600} height={400} />);
    expect(screen.getByRole("img").getAttribute("loading")).toBe("lazy");
  });

  it("does not apply loading when lazy is false", () => {
    render(<Placeholder width={600} height={400} lazy={false} />);
    expect(screen.getByRole("img").getAttribute("loading")).toBeNull();
  });

  it("sets inline placeholder SVG as background when lazy", () => {
    render(<Placeholder width={100} height={100} lazy={true} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("style")).toContain("background-image");
  });

  it("does not set inline placeholder background when lazy is false", () => {
    render(<Placeholder width={100} height={100} lazy={false} />);
    const img = screen.getByRole("img");
    const style = img.getAttribute("style") ?? "";
    expect(style).not.toContain("background-image");
  });

  it("includes bg in src URL", () => {
    render(<Placeholder width={100} height={100} bg="3b82f6" />);
    expect(screen.getByRole("img").getAttribute("src")).toContain("bg=3b82f6");
  });

  it("includes gradient params in src URL", () => {
    render(<Placeholder width={100} height={100} gradient="to-r" from="3b82f6" to="ec4899" />);
    const src = screen.getByRole("img").getAttribute("src") ?? "";
    expect(src).toContain("gradient=to-r");
    expect(src).toContain("from=3b82f6");
    expect(src).toContain("to=ec4899");
  });

  it("includes gradient via param in src URL", () => {
    render(<Placeholder width={100} height={100} gradient="to-r" from="3b82f6" via="8b5cf6" to="ec4899" />);
    const src = screen.getByRole("img").getAttribute("src") ?? "";
    expect(src).toContain("via=8b5cf6");
  });

  it("passes imgWidth and imgHeight as HTML width/height attributes", () => {
    render(<Placeholder width={100} height={100} imgWidth={200} imgHeight={150} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("width")).toBe("200");
    expect(img.getAttribute("height")).toBe("150");
  });

  it("passes className to img element", () => {
    render(<Placeholder width={100} height={100} className="my-class" />);
    expect(screen.getByRole("img").getAttribute("class")).toBe("my-class");
  });

  it("passes extra style alongside placeholder background", () => {
    render(<Placeholder width={100} height={100} lazy={true} style={{ opacity: 0.5 }} />);
    const style = screen.getByRole("img").getAttribute("style") ?? "";
    expect(style).toContain("background-image");
    expect(style).toContain("opacity");
  });

  it("passes only custom style when not lazy", () => {
    render(<Placeholder width={100} height={100} lazy={false} style={{ opacity: 0.5 }} />);
    const style = screen.getByRole("img").getAttribute("style") ?? "";
    expect(style).not.toContain("background-image");
    expect(style).toContain("opacity");
  });

  it("forwards extra HTML attributes to img", () => {
    render(<Placeholder width={100} height={100} data-testid="my-placeholder" />);
    expect(screen.getByTestId("my-placeholder")).toBeDefined();
  });

  it("includes text params in src", () => {
    render(<Placeholder width={200} height={100} text="Hello" textColor="ffffff" />);
    const src = screen.getByRole("img").getAttribute("src") ?? "";
    expect(src).toContain("text=Hello");
    expect(src).toContain("text-color=ffffff");
  });

  it("uses ref to access the img element", () => {
    const ref = React.createRef<HTMLImageElement>();
    render(<Placeholder width={100} height={100} ref={ref} />);
    expect(ref.current?.tagName).toBe("IMG");
  });

  it("includes bg color in inline placeholder SVG", () => {
    render(<Placeholder width={100} height={100} bg="ff0000" lazy={true} />);
    const style = screen.getByRole("img").getAttribute("style") ?? "";
    expect(style).toContain("background-image");
    expect(style).toContain("%23ff0000");
  });
});
