const header = document.querySelector(".header");
const btn = document.querySelector("#btn");
const title = document.querySelector("header h1");
const list = document.querySelectorAll("header ul li ");

document.body.style.fontFamily="Oswald"

header.style.backgroundColor = "red";
header.style.color = "white";
header.style.textAlign = "center";
header.style.padding = "1rem";

title.innerText = "Welcome To The JavaScript Universe";

list.forEach(
  (item) =>
    (item.style = "list-style:none; display:inline-block; margin-left:10px;")
);

btn.style.color = "red";
btn.style.backgroundColor = "yellow";
btn.style.boxShadow = "3px 3px 20px black";
btn.style.border = "none";
btn.style.fontSize = "1rem";
btn.style.padding = "5px 10px";
btn.style.borderRadius = "10px";
btn.style.margin = "1rem";
btn.style.cursor = "pointer";

const changecolor = () => {
  const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let renk = "#";
  for (let i = 0; i < 6; i++) {
    renk += color[Math.floor(Math.random() * color.length)];
  }
  return renk;
};

btn.addEventListener(
  "click",
  (e) => (header.style.backgroundColor = `${changecolor()}`)
);

const textArea = document.querySelector("#username");
const password = document.querySelector("#password");
password.type = "text";
textArea.value = "The pain that doesn't kill";

textArea.setAttribute("disabled", "");
password.value = "makes you stronger";
password.setAttribute("disabled", "");

const login = document.querySelector(".login");
login.style =
  "background-color:green; color:white; padding:5px 10px; border:none; border-radius:10px 0px ; cursor:pointer;";
login.innerText = "Get The Results";

login.addEventListener("click", (e) => {
  alert(`       🤘 Don't Forget
    ${textArea.value} ${password.value}!!!`);
});

const project = document.getElementById("projects").firstElementChild;
project.innerHTML = "Js Dom Projects";

const myProjects = [
  "Hello World!",
  "Guess Number",
  "Checkout Page",
  "Gelir-Gider Projesi",
  "Api Projects",
];

const lastList = document.getElementById("projects").lastElementChild;
//  lastList.innerHTML = `<li>${myProjects[0]}</li>`;
lastList.style.listStyle= "circle"
lastList.style.padding= "10px"

for (let i = 0; i < myProjects.length; i++) {
  lastList.innerHTML += `<li>${myProjects[i]} ⬆️</li>`;
}
console.log(lastList);

const maintype  = document.querySelector("main")
console.log(maintype)

maintype.style.backgroundColor = "aliceblue";