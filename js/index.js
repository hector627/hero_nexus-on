import { dropdownHover } from "./modules/dropdown_hover.js";
import { mobileMenu } from "./modules/mobile_menu.js";
import { typedStyle } from "./modules/typed_style.js";

document.addEventListener("DOMContentLoaded", ()=>{
  typedStyle()
  dropdownHover();
  mobileMenu(".open-menu", "(max-width: 1023px)")
})