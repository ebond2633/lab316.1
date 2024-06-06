
// This connects the HTML and JS
const mainEl = document .querySelector("main")
console.log (mainEl);

//setting the background color using the VAR method 
//to grab from the root
mainEl.style.backgroundColor ="var(--main-bg)";
//creating a HTML element
const h1= document.createElement("H1")

//attaching text to our h1 we created.
h1.innerHTML="DOM manipulation";

//appending my h1 i created to my main container

mainEl.appendChild(h1);
//add a class name to a html element 
mainEl.classList.add("flex-ctr");

//part2


const topMenuEl = document.querySelector("#top-menu");
// set the height to 100%

topMenuEl.style.height="100%";
topMenuEl.style.backgroundColor="var(--top-menu-bg)";

topMenuEl.classList.add("flex-around");

// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
 

menuLinks.forEach(link=>{
    const aElement = document.createElement("a");
    aElement.href=link.href;
    aElement.textContent= link.text;
    topMenuEl.appendChild(aElement);
});

// 316.3

const subMenuEl= document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor="var(--sub-menu-bg)";
subMenuEl,classlist.add("flex-around");
subMenuEl.style.position="absolute"
subMenuEl.style.top = "0";


const topMenuLinks=topMenuEl.querySelectorAll("a");
console.log(topMenuEl);

topMenuEl.addEventListener("click", (event)=>{
    event.preventDefault();
    //console.log(event.target.tagName);
    if (event.target.tagName != "A") return; 

// //topMenuLink.forEach(link=> 
// {
//     if(link===event.target){
//         link.classlist.toggle("active");
    
//      } else {
//     link.classList.remove("active");
//      }

// });

const linkText = event.target.textContent.toLowerCase()
const linkObject= menuLinks.find((link) => link.text===linkText )
if (event.target.classlist.contains("active")){
    event.target.classlist.remove("active");
    subMenuEl.style.top ="0";
}else{
    document.querySelectorAll("#top=menu a")
    .foreach(a) => a.classlist.remove("active");
    event.target.classlist.add("active");
}

 });


