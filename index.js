// DOM(Document Object Module)

const title = document.querySelector("#title");
title.innerHTML = "Hi ★ From JS";
title.style.color = "red";
document.title = "I own you now";

title.addEventListener("click", handleClick);

function handleClick() {
  title.style.color = "blue";
}
