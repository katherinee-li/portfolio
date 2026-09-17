import { describe, expect, it } from "vitest";

import { renderErrorPage } from "@/lib/error-page";

describe("renderErrorPage", () => {
  it("returns a full HTML document", () => {
    const html = renderErrorPage();
    expect(html.startsWith("<!doctype html>")).toBe(true);
    expect(html).toContain('<html lang="en">');
    expect(html.trimEnd().endsWith("</html>")).toBe(true);
  });

  it("includes the user-facing error messaging", () => {
    const html = renderErrorPage();
    expect(html).toContain("This page didn't load");
    expect(html).toContain("Something went wrong on our end");
  });

  it("offers a reload action and a link back home", () => {
    const html = renderErrorPage();
    expect(html).toContain('onclick="location.reload()"');
    expect(html).toContain('href="/"');
  });

  it("declares a responsive viewport and utf-8 charset", () => {
    const html = renderErrorPage();
    expect(html).toContain('<meta charset="utf-8" />');
    expect(html).toContain('name="viewport"');
  });

  it("is deterministic across calls", () => {
    expect(renderErrorPage()).toBe(renderErrorPage());
  });
});
