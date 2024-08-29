export const dropdownHover = () => {
  const $li = document.querySelectorAll(".dropdown__li"),
    $a = document.querySelectorAll(".dropdown__a");

  $a.forEach((el) => {
    const $ul = el.closest(".dropdown__li").querySelector(".dropdown__ul")
    el.addEventListener("mouseenter", () => {
      $ul.classList.add("hover")
    })
  });

  $li.forEach(list => {
    const $ul = list.querySelector(".dropdown__ul");
    list.addEventListener("mouseleave", () => {
      $ul.classList.remove("hover")
    })
  })
};