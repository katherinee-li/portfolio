import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { useIsMobile } from "@/hooks/use-mobile";

// jsdom has no matchMedia implementation, so provide a minimal one whose
// "change" listeners we can fire manually to simulate a viewport resize.
type Listener = () => void;
let changeListeners: Listener[];

function setViewportWidth(width: number) {
  Object.defineProperty(window, "innerWidth", {
    configurable: true,
    writable: true,
    value: width,
  });
}

beforeEach(() => {
  changeListeners = [];
  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: window.innerWidth < 768,
      media: query,
      addEventListener: (_: string, listener: Listener) => changeListeners.push(listener),
      removeEventListener: (_: string, listener: Listener) => {
        changeListeners = changeListeners.filter((l) => l !== listener);
      },
    })),
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useIsMobile", () => {
  it("returns true when the viewport is narrower than the breakpoint", () => {
    setViewportWidth(500);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("returns false when the viewport is at or above the breakpoint", () => {
    setViewportWidth(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("treats exactly the breakpoint width (768) as not mobile", () => {
    setViewportWidth(768);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("updates when the media query change event fires", () => {
    setViewportWidth(1024);
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      setViewportWidth(400);
      changeListeners.forEach((listener) => listener());
    });
    expect(result.current).toBe(true);
  });

  it("removes its media query listener on unmount", () => {
    setViewportWidth(500);
    const { unmount } = renderHook(() => useIsMobile());
    expect(changeListeners.length).toBe(1);
    unmount();
    expect(changeListeners.length).toBe(0);
  });
});
