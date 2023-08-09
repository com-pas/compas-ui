export function newThemeEvent(name, location) {
    return new CustomEvent("cmp-theme", {
        bubbles: true,
        composed: true,
        detail: { name, location },
    });
}
