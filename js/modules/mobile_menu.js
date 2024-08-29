export const mobileMenu = (open, mq) => {
  const d = document,
    $body = d.body,
    breakpoint = window.matchMedia(mq),
    $navMobile = d.getElementById("mobile-menu"),
    $li = $navMobile.querySelectorAll('li[data-list-mobile]'),
    listToArray = Array.from($li),
    $close_menu = $navMobile.querySelector(".close-menu"),
    $dropdown = $navMobile.querySelectorAll(".mobile-dropdown__a");
  
  let start = 150, 
    attached = 80,
    $div; //<- Pantalla de click externo

  function show(list){
    list.forEach( li => {
      li.style.opacity = 1;
      li.style.visibility = "visible";
      li.style.transitionProperty ="opacity, visibility"
      li.style.transitionDuration =`${start}ms`
      li.style.transitionDelay =`${start += attached}ms`
    })
    start = 150;
  }
  function hide(list){
    list.forEach(li => {
      li.style.opacity = 0;
      li.style.visibility = "hidden";
      li.style.transitionProperty ="opacity, visibility"
      li.style.transitionDuration =`${start}ms`
      li.style.transitionDelay =`${start += attached}ms`
    })
    start = 150;
  }
  
  function clickOut () {
    $div = d.createElement("div")
    $body.appendChild($div)
    $div.classList.add("clickOut")
  }

  function removeStyles(){
    $close_menu.style.transform = "scale(0, 0)"

    setTimeout(()=>{
      $navMobile.classList.remove("clicked")
      $div.style.opacity = 0
      $body.removeChild($div)
    }, 100)
  }

  $dropdown.forEach(el => {
    const $ul = el.closest(".mobile-dropdown__li").querySelector(".mobile-dropdown__ul")
    el.addEventListener("click", ()=>{
      $ul.classList.toggle("see")
    })
  })

  d.addEventListener("click", e => {
    if(e.target.matches(open)){
      $navMobile.classList.add("clicked")
      show(listToArray)
      setTimeout(()=>{
        $close_menu.style.transform = "scale(1, 1)"
      }, 200)

      // Detectar cambio de pantalla, cuando la navegación está activa
      breakpoint.addEventListener("change", (event)=>{
        if(!event.matches){
          $navMobile.classList.remove("clicked")
          $body.contains($div) && $body.removeChild($div)
        }
      })
      // Detectar click fuera del menu
      if(d.querySelectorAll(".clickOut").length === 0){
        clickOut()
      }
    }
    if(e.target === $close_menu){
      hide(listToArray.toReversed())
      setTimeout(removeStyles, 900);
    }
    if(e.target === $div){
      hide(listToArray.toReversed())
      setTimeout(removeStyles, 900);
    }
  })

}