//developer, hardware nerd, highschooler, pc enthusiast, procrastinator, Govind
let i=0;
const messages = [
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",
    "a developer!",

    "a develope",
    "a develop",
    "a develo",
    "a devel",
    "a deve",
    "a dev",
    "a de",
    "a d",

    "a hd",
    "a had",
    "a hard",
    "a hardw",
    "a hardwa",
    "a hardwar",
    "a hardware",
    "a hardware ",
    "a hardware n",
    "a hardware ne",
    "a hardware ner",
    "a hardware nerd",

    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",
    "a hardware nerd!",

    "a hardware nerd",
    "a hardware ner",
    "a hardware ne",
    "a hardware n",
    "a hardware ",
    "a hardware",
    "a hardwar",
    "a hardwa",
    "a hardw",
    "a hard",
    "a har",
    "a ha",
    "a h",

    "a hi",
    "a hig",
    "a high",
    "a highs",
    "a highsc",
    "a highsch",
    "a highscho",
    "a highschoo",
    "a highschool",
    "a highschoole",
    "a highschooler",

    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",
    "a highschooler!",

    "a highschooler",
    "a highschoole",
    "a highschool",
    "a highschoo",
    "a highscho",
    "a highsch",
    "a highsc",
    "a highs",
    "a high",
    "a hig",
    "a hi",
    "a h",
    "a ",
    "a",
    "",
    "G",
    "Go",
    "Gov",
    "Govi",
    "Govin",
    "Govind",
    "Govind ",
    "Govind N",
    "Govind Na",
    "Govind Nai",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",
    "Govind Nair",

    "Govind Nai",
    "Govind Na",
    "Govind N",
    "Govind ",
    "Govind",
    "Govin",
    "Govi",
    "Gov",
    "Go",
    "G",
    "",
    "a",
    "a ",
    "a d",
    "a de",
    "a dev",
    "a deve",
    "a devel",
    "a develo",
    "a develop",
    "a develope",
    "a developer",

]
let index = 0;
const chg = document.getElementById("txt");
setInterval(() => {
chg.innerHTML = messages[index];
index = (index + 1) % messages.length;
},200); // every 10 seconds
const cursor = document.getElementById("cursor");
const space = document.getElementById("space");
setInterval(() => {
if (i===0){
    cursor.innerHTML = "|";
    cursor.style.paddingLeft="0px"
}
else{
    cursor.style.paddingLeft = "2px"
    cursor.innerHTML = "&nbsp";
}
i++;
if (i===2){
    i=0;
}
},500); // every 10 seconds
function strt(data){
    data.classList.add("cool");
}
function end(data){
    setTimeout(()=>{
        data.classList.remove("cool");
    },2500);
}
let x=0,y=0,z=0;
const body = document.getElementById("bdy");
const red = document.getElementById("red");
const green = document.getElementById("green");
const rgb=document.getElementById("rgb");
document.addEventListener("keypress", function(event){
    if (event.key==="r"){
        location.reload();
    }
})
