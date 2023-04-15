var valueDisplays = document.querySelectorAll(".num-counter");
var countBox = document.getElementById("counter-box");

var interval = 5000;



function CounterJavascript() {


    valueDisplays.forEach((valueDisplay) => {
        var startValue = 0;
        var endValue = parseInt(valueDisplay.getAttribute("data-val"));
        var duration = Math.floor(interval / endValue);
        var counter1 = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter1)
            }
        }, duration);

    });
}

var counter = true;


window.onscroll = function () {

    if (window.pageYOffset > countBox.offsetTop - 310 && counter == true) {
        CounterJavascript();
        counter = false;
    }

}