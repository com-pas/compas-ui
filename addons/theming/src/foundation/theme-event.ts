export type ThemeDetail = {
  name: string;
  location: string;
};

/** Represents the intent to open `doc` with filename `docName`. */
export type ThemeEvent = CustomEvent<ThemeDetail>;

export function newThemeEvent(name: string, location: string): ThemeEvent {
  return new CustomEvent<ThemeDetail>("cmp-theme", {
    bubbles: true,
    composed: true,
    detail: { name, location },
  });
}

declare global {
  interface ElementEventMap {
    ["cmp-theme"]: ThemeEvent;
  }
}
