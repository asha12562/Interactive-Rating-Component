let button_value;
let buttonList = document.querySelectorAll(".button");
  buttonList.forEach(function(i){
    i.addEventListener("click", function(e){
    button_value = e.target.value;
})
})

let submit = document.querySelectorAll(".submit");
submit.forEach(function(i){
    i.addEventListener("click", function(e) {
        const card = document.querySelector(".card-inner");
        card.classList.toggle('is-flipped');
    })
})

function changeText() {
    document.getElementById("selection").innerHTML = `You selected ${button_value} out of 5!`;
}