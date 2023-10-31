let counterValue = 0;

function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.textContent = counterValue;
}
document.getElementById("decrease").addEventListener("click", function () {
    counterValue--;
    updateCounter();
});

document.getElementById("reset").addEventListener("click", function (){
    counterValue=0;
    updateCounter();
});

document.getElementById("increase").addEventListener("click", function() {
    counterValue++;
    updateCounter();
});

updateCounter();

