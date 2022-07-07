function viewResult() {
    var inputValue = document.getElementById("month").value;
    var result = document.getElementById("result");
    if (inputValue === "jan" || inputValue === "1") {
        result.value = "current month is january";
        result.style.background = "#0c64e796";
        result.classList.add('text-light');
    }
    else if (inputValue === "feb" || inputValue === "2") {
        result.value = "current month is february";
        result.style.background = "green";
        result.classList.add('text-light');
    }
    else if (inputValue === "mar" || inputValue === "3") {
        result.value = "current month is march";
        result.style.background = "blue";
        result.classList.add('text-light');
    }
    else if (inputValue === "apr" || inputValue === "4") {
        result.value = "current month is april";
        result.style.background = "yellow";
        result.classList.add('text-dark');
        return;
    }
    else if (inputValue === "may" || inputValue === "5") {
        result.value = "current month is may";
        result.style.background = "yellowgreen";
        result.classList.add('text-light');
    }
    else if (inputValue === "june" || inputValue === "6") {
        result.value = "current month is june";
        result.style.background = "skyblue";
        result.classList.add('text-light');
    }
    else if (inputValue === "jul" || inputValue === "7") {
        result.value = "current month is july";
        result.style.background = "olive";
        result.classList.add('text-light');
    }
    else if (inputValue === "aug" || inputValue === "8") {
        result.value = "current month is august";
        result.style.background = "blueviolet";
        result.classList.add('text-light');
    }
    else if (inputValue === "sep" || inputValue === "9") {
        result.value = "current month is september";
        result.style.background = "indigo";
        result.classList.add('text-light');
        return;
    }
    else if (inputValue === "oct" || inputValue === "10") {
        result.value = "current month is october";
        result.style.background = "pink";
        result.classList.add('text-dark');
    }
    else if (inputValue === "nov" || inputValue === "11") {
        result.value = "current month is november";
        result.style.background = "purple";
        result.classList.add('text-light');
    }
    else if (inputValue === "dec" || inputValue === "12") {
        result.value = "current month is december";
        result.style.background = "black";
        result.classList.add('text-light');
    }
    else {
        result.value = "wrong input"
    }

}

function checkGreater() {
    var firstNo = parseInt(document.getElementById("firstNo").value);
    var secondNo = parseInt(document.getElementById("secondNo").value);
    var resultC = document.getElementById("resultC");
    if (firstNo > secondNo) {
        resultC.value = "first number is greater ";
        resultC.style.background = "green";
        resultC.classList.add('text-light');

    }
    else if (firstNo == secondNo) {
        resultC.value = "both  numbers are equal ";
        resultC.style.background = "red";
        resultC.classList.add('text-light');
    }
    else {
        resultC.value = "second number is greater ";
        resultC.style.background = "blue";
        resultC.classList.add('text-light');

    }

}
function checkGreaterr() {
    var firstN = parseInt(document.getElementById("firstN").value);
    var secondN = parseInt(document.getElementById("secondN").value);
    var thirdN = parseInt(document.getElementById("thirdN").value);

    var resultG = document.getElementById("resultG");
    if (firstN > secondN && firstN > thirdN) {
        resultG.value = "first number is greater ";
        resultG.style.background = "green";
        resultG.classList.add('text-light');

    }

    else if (secondN > firstN && secondN > thirdN) {
        resultG.value = "second number is greater";
        resultG.style.background = "red";
        resultG.classList.add('text-light');
    }

    else if (thirdN > firstN && thirdN > secondN) {
        resultG.value = "third number is greater ";
        resultG.style.background = "blue";
        resultG.classList.add('text-light');

    }

    else {


        resultG.value = "all are equal ";
        resultG.style.background = "blue";
        resultG.classList.add('text-light');
    }


}
function checkNumber() {
    var anyNum = parseInt(document.getElementById("anyNum").value);

    var oddEven = document.getElementById("oddEven");
    if (anyNum % 2 == 0) {
        oddEven.value = "number is even ";
        oddEven.style.background = "green";
        oddEven.classList.add('text-light');

    }
    else {
        oddEven.value = " number is odd ";
        oddEven.style.background = "green";
        oddEven.classList.add('text-light');
    }
}
function checkSwap() {

    var swap1 = parseInt(document.getElementById("swap1").value);
    var swap2 = parseInt(document.getElementById("swap2").value);
    var temp = swap1;
    swap1 = swap2;
    swap2 = temp;
    document.getElementById("swap1").value = swap1;
    document.getElementById("swap2").value = temp;

    console.log(swap1, swap2, temp);


}
