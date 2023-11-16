let redButton = document.getElementById("redButton");

redButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    body.style.backgroundColor = "red";
});

let greenButton = document.getElementById("greenButton");

greenButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    body.style.backgroundColor = "green";
});

let blueButton = document.getElementById("blueButton");

blueButton.addEventListener("click",()=>{
    let body = document.getElementById("body");
    body.style.backgroundColor = "blue";
});
