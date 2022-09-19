// Task 1.0
const mainEl = document.querySelector("main");

// Task 1.1
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Task 1.3
mainEl.setAttribute("class", "flex-ctr");

// Task 2.0
const topMenuEl = document.getElementById("top-menu");

// Task 2.1
topMenuEl.style.height = "100%";

// Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg";

// Task 2.3
topMenuEl.setAttribute("class", "flex-around");

// Task 3.0
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Task 3.1
for (let i = 0; i < menuLinks.length; i++) {
  const linkEl = menuLinks[i];
  let newA = document.createElement("a");
  newA.setAttribute("href", linkEl.href);
  newA.innerText = linkEl.text;
  topMenuEl.append(newA);
}

// Task 4.0
const subMenuEl = document.getElementById("sub-menu");

// Task 4.1
subMenuEl.style.height = "100%";

// Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
subMenuEl.setAttribute("class", "flex-around");

// Task 4.4
subMenuEl.style.position = "absolute";

// Taske 4.5
subMenuEl.style.top = "0";

// Task 5.0
menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Task 5.1
let topMenuLinks = topMenuEl.querySelectorAll("a");

let showingSubMenu = false;

// Task 5.2
topMenuEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.tagName !== "A") return;
  if (evt.target.innerText === "ABOUT") mainEl.innerText = evt.target.innerText;
  // Task 5.3
  evt.target.classList.remove("active");
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  // Task 5.4
  removeActiveClassFromLinks();
  // Task 5.5
  evt.target.setAttribute("class", "active");
  // Task 5.6
  menuLinks.forEach((item) => {
    if (
      item.text.toLocaleUpperCase() === evt.target.innerText &&
      "subLinks" in item
    ) {
      // Task 5.7
      showingSubMenu = true;
      subMenuEl.style.top = "100%";
      buildSubMenu(item.subLinks);
    }
  });
});
// Task 5.8
function buildSubMenu(links) {
  subMenuEl.innerHTML = "";
  links.forEach((link) => {
    let newAEl = document.createElement("a");
    newAEl.setAttribute("href", link.href);
    newAEl.innerText = link.text;
    subMenuEl.append(newAEl);
  });
}
function removeActiveClassFromLinks() {
  topMenuLinks.forEach((link) => {
    link.classList.remove("active");
  });
}
//

// Task 6.0
subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName != "A") return;
  // Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  // Task 6.2
  removeActiveClassFromLinks();
  mainEl.innerText = event.target.innerText;
});
