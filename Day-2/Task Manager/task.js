let inputfield = document.getElementById("taskfield");
let addtask = document.getElementById("addtask");
let listcontainer = document.querySelector(".listContainer");

addtask.addEventListener("click", function(){
    // condition
if (inputfield.value === ""){
    alert("You must enter a task");
}
else{
    let li = document.createElement("li");
    li.textContent = inputfield.value;
    
    let span = document.createElement("span");
    span.textContent = "Remove";
    li.appendChild(document.createElement("br"));
    li.appendChild(span);
    listcontainer.appendChild(li);
    }
});

listcontainer.addEventListener('click', function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else{
        if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    }
});