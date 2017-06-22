function displayEvens(){
    calculate();
}

function calculate(){

    var a = parseInt(document.getElementById("startingNum").value);
    var b = parseInt(document.getElementById("endingNum").value);
    var c = parseInt(document.getElementById("stepperNum").value);
    var evenNums = [];

    document.getElementById("startNum").innerHTML = a;
    document.getElementById("endNum").innerHTML = b;
    document.getElementById("stepNum").innerHTML = c;
    if(a == "" || isNaN(a)){
        alert("Starting number must be filled with a number.");
        return false;
    }
    if(b == "" || isNaN(b)){
        alert("Ending number must be filled with a number.");
        return false;
        }
    if(a == b){
        alert("Starting number and ending number cannot be the same.");
        return false;
        }
    if(c == "" || c < 0){
        alert("Step counter must be a positive number.");
        return false;
        }
    while (a < b){
        if(a % 2 == 0){
            evenNums.push(a);
            }
        a += c;
    }
    for (i = 0; i < evenNums.length; i++){
        document.getElementById("result").innerHTML += "<p>" + evenNums[i] + "</p>";
    }
}