export const typedStyle = () => {
  const d = document,
  $contenth1 = d.querySelector(".title__h1--content"),
  $contenth2 = d.querySelector(".lema__h2--content"),
  texts = {
    h1Start: `<strong class="remarkable">N</strong>`,
    h1End: "exus-ON",
    h2Start: `<strong class="remarkable">C</strong>`,
    h2End: "iberseguridad ética"
  };

  function fill(element, start, end, i=0){
    if(i === end.length) return
    
    if(!element.textContent){
      setTimeout(()=>{
        element.innerHTML = start
      }, 140);
    }

    setTimeout(() => {
      element.innerHTML += end[i]
      fill(element, start, end, i+=1)
    }, 140);
  }

  fill($contenth1, texts.h1Start, texts.h1End);
  fill($contenth2, texts.h2Start, texts.h2End);

}