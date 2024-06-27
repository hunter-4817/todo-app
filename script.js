function addTask(){
    
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    if(inputBox && inputBox.value ===''){
        alert("You must write something!");
    }
    else if(inputBox && inputBox.value !== ''){
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    if(inputBox)
        inputBox.value = "";
}
