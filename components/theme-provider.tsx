// components/theme-provider.tsx
"use client";

import React, { useCallback, useEffect } from "react";

const THEME_KEYS = ["theme", "color-mode", "color-scheme", "site-theme", "isDark"];

type Props = { children: React.ReactNode };

/**
 * Robust ThemeProvider (v2)
 *
 * - Respects persisted user choice if present, otherwise uses prefers-color-scheme.
 * - Applies/removes both html.class 'dark' and html.dataset.theme = 'dark' to cover next-themes and other libs.
 * - Recomputes on popstate/pageshow/visibilitychange/focus to handle BFCache and history navigation.
 * - Exposes window.__setTheme for manual toggles (optional).
 */
export function ThemeProvider({ children }: Props) {
  // Read persisted preference (if any). Return "dark"|"light"|null
  const getPersisted = useCallback((): "dark" | "light" | null => {
    try {
      for (const k of THEME_KEYS) {
        const v = window?.localStorage?.getItem(k);
        if (v != null && v !== "") {
          const s = String(v).toLowerCase();
          if (s === "dark" || s === "true") return "dark";
          if (s === "light" || s === "false") return "light";
          if (s.indexOf(",") !== -1) {
            const first = s.split(",")[0].trim();
            if (first === "dark" || first === "true") return "dark";
            if (first === "light" || first === "false") return "light";
          }
        }
      }
    } catch (_) {
      // ignore read errors
    }
    return null;
  }, []);

  // Determine whether dark mode should be active
  const computeShouldUseDark = useCallback((): boolean => {
    if (typeof window === "undefined") return false;
    const persisted = getPersisted();
    if (persisted === "dark") return true;
    if (persisted === "light") return false;
    try {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (_) {
      return false;
    }
  }, [getPersisted]);

  // Apply or remove both class="dark" and data-theme attributes
  const applyTheme = useCallback(() => {
    if (typeof document === "undefined") return;
    try {
      const html = document.documentElement;
      const shouldDark = computeShouldUseDark();

      // Apply/remove class
      if (shouldDark) html.classList.add("dark");
      else html.classList.remove("dark");

      // Also set or remove data-theme attribute (covers next-themes "data-theme" case)
      if (shouldDark) {
        html.setAttribute("data-theme", "dark");
      } else {
        // remove data-theme only if it is "dark" to avoid clobbering other uses
        if (html.getAttribute("data-theme") === "dark") {
          html.removeAttribute("data-theme");
        }
      }

      // As a last resort, also remove any inline 'style' or other oddities that might force dark
      // (keeps this minimal; uncomment if you need aggressive clearing)
      // html.removeAttribute("data-theme");
    } catch (_) {
      // ignore DOM errors
    }
  }, [computeShouldUseDark]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // apply immediately on mount
    applyTheme();

    // Re-apply on events that cover BFCache / popstate / focus restore
    const onApply = () => {
      // tiny delay so if the browser is restoring DOM we wait a tick
      setTimeout(() => applyTheme(), 10);
    };

    window.addEventListener("popstate", onApply); // back/forward
    window.addEventListener("pageshow", onApply as EventListener); // BFCache restores
    window.addEventListener("visibilitychange", () => {
      // when tab becomes visible, re-evaluate
      if (document.visibilityState === "visible") onApply();
    });
    window.addEventListener("focus", onApply);

    // Expose a helper for toggling theme externally (optional)
    try {
      (window as any).__setTheme = (val: "dark" | "light" | null) => {
        try {
          if (val === null) {
            for (const k of THEME_KEYS) window.localStorage.removeItem(k);
          } else {
            window.localStorage.setItem("theme", val);
          }
        } catch (_) {}
        // Immediately reapply after persist change
        applyTheme();
      };
    } catch (_) {}

    return () => {
      window.removeEventListener("popstate", onApply);
      window.removeEventListener("pageshow", onApply as EventListener);
      window.removeEventListener("visibilitychange", onApply as EventListener);
      window.removeEventListener("focus", onApply as EventListener);
      try {
        delete (window as any).__setTheme;
      } catch (_) {}
    };
  }, [applyTheme]);

  return <>{children}</>;
}