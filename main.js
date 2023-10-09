let div = document.getElementById("test")
let truc = true;
div.addEventListener("click", () => {
    if(truc) {
        div.style.backgroundColor = "blue"
        truc = false;
    } else {
        div.style.backgroundColor = "red"
        truc = true;

    }
})