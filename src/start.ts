import { createStart, createMiddleware } from "@tanstack/react-start";
import { isNotFound, isRedirect } from "@tanstack/react-router";

import { renderErrorPage } from "./lib/error-page";

// Control-flow "throws" that the router/runtime is meant to handle itself —
// redirects, notFound signals, raw Responses, and h3-style HTTP errors. These
// must propagate untouched; only genuine unexpected errors get the 500 page.
function isControlFlow(error: unknown): boolean {
  return (
    error instanceof Response ||
    isRedirect(error) ||
    isNotFound(error) ||
    (error != null && typeof error === "object" && "statusCode" in error)
  );
}

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (isControlFlow(error)) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
