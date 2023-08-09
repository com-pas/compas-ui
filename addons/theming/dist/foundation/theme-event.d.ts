export type ThemeDetail = {
    name: string;
    location: string;
};
/** Represents the intent to open `doc` with filename `docName`. */
export type ThemeEvent = CustomEvent<ThemeDetail>;
export declare function newThemeEvent(name: string, location: string): ThemeEvent;
declare global {
    interface ElementEventMap {
        ["cmp-theme"]: ThemeEvent;
    }
}
