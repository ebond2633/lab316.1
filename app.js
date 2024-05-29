
// This connects the HTML and JS
const mainEl = document .querySelector("main")
console.log (mainEl);

//setting the background color using the VAR method 
//to grab from the root
mainEl.style.backGroundColor ="var(--main-bg)";
//creating a HTML element
const h1= document.createElement("H1")

//attaching text to our h1 we created.
h1.innerHTML="DOM manipulation";

//appending my h1 i created to my main container

mainEl.appendChild(h1);
//add a class name to a html element 
mainEl.classList.add("flex-ctr");

//part2


const topMainEl=document..querySelector("#top=menu");
// set the height to 100%

topMenuEl.style.height="100"%;
topMenuEl.style.backgroundColor="var(--top-menu-bg)";


