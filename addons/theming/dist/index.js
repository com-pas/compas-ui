function toggleDark() {
    document.querySelector("html").hasAttribute("dark")
        ? setLightMode()
        : setDarkMode();
}
function setDarkMode() {
    document.querySelector("html").setAttribute("dark", "dark");
}
function setLightMode() {
    document.querySelector("html")?.removeAttribute("dark");
}
export default function theming(host) {
    const matchMediaDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    matchMediaDarkMode.matches ? setDarkMode() : setLightMode();
    matchMediaDarkMode.addEventListener("change", (evt) => {
        evt.matches ? setDarkMode() : setLightMode();
    });
    host.addEventListener("cmp-theme", (evt) => {
        document
            .querySelector("link#cmp-theme")
            ?.setAttribute("href", evt.detail.location);
    });
}
