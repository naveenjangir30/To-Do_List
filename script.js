const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector("#btn");
const error = document.querySelector("#error")

button.addEventListener("click", addTask)

function addTask(){
    if (inputBox.value==="") {
        error.style.display = "inline"
        setTimeout(() => {
            error.style.display = "none"
        }, 1000);
    }
    else{
        error.style.display = "none"
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
}

listContainer.addEventListener("click", function(e){
if (e.target.tagName === "LI") {
e.target.classList.toggle("checked")
saveData()

}
else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()

}
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showData()