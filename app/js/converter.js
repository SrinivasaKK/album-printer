import { STATIC_TEXTS } from "./constants";
export default function convertToPixel(number) {
  return (number * STATIC_TEXTS.DPI) / window.devicePixelRatio;
}
