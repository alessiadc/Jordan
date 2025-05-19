let eta = 17;
if (eta <= 17) {
    console.log("non puoi entrare")
} else {
    console.log("accomodati")
}

console.log("arrivo")
console.log("arrivo")
console.log("arrivo")
console.log("arrivo")

for (let i = 0; i <= 17; i++) {
    console.log("arrivo" + i)

}

//function logSubmit(event) {
//log.textcontent = Form Submitted! Timestamp:
//Event.preventDefault()
//}

//const form = document.getElementById("form")
//const log = document.getElementById("log")
//form.addEventListener("submit", logSubmit)

let item = document.getElementById("item");
item.innerHTML = "il testo è cambiato";
console.log(item);

let forma = document.getElementsByClassName("form");
console.log(forma);
for (let i = 0; i < forma.length; i++) {
    forma[i].style.background = "white";
}

function mostraAlert() {
    alert("Stai aprendo la pagina");
}
//mostraAlert()

function somma(x, y) {
    return x + y;
}
console.log(somma(2, 4))

function formSubmit(event) {
    let data = new FormData(event.target);
    let datavalues = Object.fromEntries(data.entries());
    let name = data.get("name");
    let email = data.get("email");
    let date = data.get("date");
    let psw = data.get("psw");
    alert("l'utente ha dichiarato:" + name + email + date + psw);
}
let arr = [".", ",", "-", "?", "!"]
for (let i = 0; i < arrey.length; i++) {
    if (name.contains(arr[i])) {
        alert("Ma cosa scrivi")
        break;
    }
} 

//form needs to be an ID
let form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

let btn = document.getElementById("button");
btn.addEventListener