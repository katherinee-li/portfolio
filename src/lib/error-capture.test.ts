import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { consumeLastCapturedError } from "@/lib/error-capture";

// The module registers global "error"/"unhandledrejection" listeners on import,
// so dispatching those events exercises the same capture path server.ts relies on.
describe("consumeLastCapturedError", () => {
  beforeEach(() => {
    // Drain any error captured by a previous test to start from a clean slate.
    consumeLastCapturedError();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns undefined when no error has been captured", () => {
    expect(consumeLastCapturedError()).toBeUndefined();
  });

  it("returns the error carried by a global error event", () => {
    const error = new Error("boom");
    globalThis.dispatchEvent(new ErrorEvent("error", { error }));
    expect(consumeLastCapturedError()).toBe(error);
  });

  it("captures the reason from an unhandled promise rejection event", () => {
    const reason = new Error("rejected");
    const event = new Event("unhandledrejection") as Event & { reason: unknown };
    event.reason = reason;
    globalThis.dispatchEvent(event);
    expect(consumeLastCapturedError()).toBe(reason);
  });

  it("falls back to the event itself when no error field is present", () => {
    const event = new ErrorEvent("error");
    globalThis.dispatchEvent(event);
    expect(consumeLastCapturedError()).toBe(event);
  });

  it("clears the captured error after it is consumed once", () => {
    globalThis.dispatchEvent(new ErrorEvent("error", { error: new Error("once") }));
    expect(consumeLastCapturedError()).toBeInstanceOf(Error);
    expect(consumeLastCapturedError()).toBeUndefined();
  });

  it("discards a captured error once it is older than the TTL", () => {
    vi.useFakeTimers();
    globalThis.dispatchEvent(new ErrorEvent("error", { error: new Error("stale") }));
    vi.advanceTimersByTime(5_001);
    expect(consumeLastCapturedError()).toBeUndefined();
  });

  it("still returns a captured error that is within the TTL", () => {
    vi.useFakeTimers();
    const error = new Error("fresh");
    globalThis.dispatchEvent(new ErrorEvent("error", { error }));
    vi.advanceTimersByTime(4_000);
    expect(consumeLastCapturedError()).toBe(error);
  });
});
