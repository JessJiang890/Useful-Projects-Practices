// document.querySelector("hamburger-menu").addEventListener("click", () => {
//     document.querySelector(".container").classList.toggle("change");
// })
const menu = document.querySelector(".hamburger-menu");

menu.addEventListener("click", () => { 
    document.querySelector(".container").classList.toggle("change");
}   );

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) =>{
    const el = e.target.parentNode;
    console.log(el.nextElementSibling);
    if (el.classList[0] === "nav-link") {
        el.nextElementSibling.classList.toggle("changeNav");
        el.classList.toggle("change");
    }
} )