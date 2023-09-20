const $ = document;
let inputRange = $.querySelector("#range");
let containerElem = $.querySelector(".container");
function inputRangeHandler(event) {
    let inputRangeValue = event.target.value;
    containerElem.style.filter = "brightness(" + inputRangeValue + "%)"
};
inputRange.addEventListener('change', inputRangeHandler);
 