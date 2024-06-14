

var menuLinks = [
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

//Part One
//Select and store the menu element in a variable
const mainEl = document.querySelector("main");
//Store CSS varibale in a JS variable
const mainBg = "var(--main-bg)";

//Change menuEl background color using the variable above
mainEl.style.background = mainBg;
//Add an h1 and text to menu
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
//add flex-ctr class to menu
mainEl.classList.add("flex-ctr");

//Part Two
//Select and store the nav bar in a variable
const topMenuEl = document.getElementById("top-menu");
//Store CSS variable in a JS variable
const menuBg = "var(--top-menu-bg)";

//Change nav height ot be 100%
topMenuEl.style.height = "100%";
//Change the nav background color
topMenuEl.style.background = menuBg;
//Add flex-around class to nav
topMenuEl.classList.add("flex-around");

//iterate over the entire menuLinks array
menuLinks.forEach((linkOBj) => {
  let aEl = document.createElement("a");
  aEl.setAttribute("setAttribute", linkOBj.href);
  aEl.textContent = `${linkOBj.text}`;
  topMenuEl.append(aEl);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

const topMenuLinks = document.querySelectorAll("a");
console.log(topMenuLinks);

topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  } else {
    topMenuLinks.forEach((a) => a.classList.remove("active"));
    event.target.classList.toggle("active");
  }
});

