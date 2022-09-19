const btn = document.querySelector("input");
btn.addEventListener("keypress", (evt) => {
  // testing!
  const inpEl = document.querySelector("input");
  if (evt.key != "Enter") return;
  if (inpEl.value.length > 0) {
    const liEl = document.createElement("li");
    liEl.textContent = inpEl.value;
    document.querySelector("ul").append(liEl);
    inpEl.value = "";
  }
});

document.querySelector("ul").addEventListener("click", handleEvent);
function handleEvent(evet) {
    let liEls = document.querySelectorAll('li')
    liEls.forEach(li => {
        li.style.color = 'black'
        li.style.fontSize='2px'

    });
  evet.target.style.color = "red";
  evet.target.style.fontSize='55px'
}
