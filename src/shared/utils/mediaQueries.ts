export const MOBILE = window.matchMedia("(max-width: 1024px)").matches;
export const DESKTOP = window.matchMedia("(min-width: 1024px)").matches;

export const TABLET = window.matchMedia(
  "(min-width: 600px) and (max-width: 1023px)"
).matches;
export const SMALL_LAPTOP = window.matchMedia(
  "(min-width: 1024px) and (max-width: 1439px)"
).matches;
export const LAPTOP = window.matchMedia(
  "(min-width: 1440px) and (max-width: 1919px)"
).matches;
export const PC = window.matchMedia("(min-width: 1920px)").matches;
