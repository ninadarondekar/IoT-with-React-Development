// Button is double clicked which changes the background colour and adds heading

let button = document.getElementById("button");

button.addEventListener("dblclick", function () {
    alert("Button was clicked");
    
    document.body.style.backgroundColor = "blue";
    let heading = document.createElement("h1")
    heading.textContent = "Ninad";
    heading.classList = "heading";
    document.body.appendChild(heading);
});

function click() {
    alert("alert message");
}
