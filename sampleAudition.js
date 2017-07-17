function clearErrors() {
    for (var loopCounter = 0; loopCounter < document.forms["getNumbers"].elements.length; loopCounter++){
        if(document.forms["getNumbers"].elements[loopCounter].parentElement.className.indexOf("has-") != -1){
            document.forms["getNumbers"].elements[loopCounter].parentElement.className = "form-group";
        }
    }
}

function resetForm(){
    clearErrors();
    var startNum = parseInt(document.getElementById("startNum").value);
    var endNum = parseInt(document.getElementById("endNum").value);
    var stepNum = parseInt(document.getElementById("stepNum").value);

    document.forms["getNumbers"]["startNum"].value = "";
    document.forms["getNumbers"]["endNum"].value = "";
    document.forms["getNumbers"]["stepNum"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens";
    document.getElementById("num1").innerHTML = "";
    document.getElementById("num2").innerHTML = "";
    document.getElementById("num3").innerHTML = "";
    document.forms["getNumbers"]["startNum"].focus();
}
 function displayEvens(startNum,endNum,stepNum) {

    var startNum = parseInt(document.getElementById("startNum").value);
    var endNum = parseInt(document.getElementById("endNum").value);
    var stepNum = parseInt(document.getElementById("stepNum").value);

    console.log('started function');
    var evenNums = [];
    console.log("looping from " + startNum + " to " + endNum + " by " + stepNum);
    for (var i = startNum; i < endNum; i += stepNum){
        if(i % 2 == 0){
            console.log("pushing " + i);
            evenNums.push(i);
        }
    }
        //console.log("evenNums is: " + evenNums.join(","));
        document.getElementById("results").innerText = evenNums;
    }

function validateNums(){
    clearErrors();
    displayEvens();

    var startNum = document.forms["getNumbers"]["startNum"].value;
    var endNum = document.forms["getNumbers"]["endNum"].value;
    var stepNum = document.forms["getNumbers"]["stepNum"].value;

    if(startNum == "" || isNaN(startNum)){
        alert("Starting number must be filled with a number.");
        document.forms["getNumbers"]["startNum"].parentElement.className = "form-group has-error";
        document.forms["getNumbers"]["startNum"].focus();
        return false;
    }
    if(endNum == "" || isNaN(endNum)){
        alert("Ending number must be filled with a number.");
        document.forms["getNumbers"]["endNum"].parentElement.className = "form-group has-error";
        document.forms["getNumbers"]["endNum"].focus();
        return false;
        }
    if(startNum == endNum){
        alert("Starting number and ending number cannot be the same.");
        return false;
        }
    if(stepNum == "" || stepNum < 0){
        alert("Step counter must be filled with a positive number.");
        document.forms["getNumbers"]["stepNum"].parentElement.className = "form-group has-error";
        document.forms["getNumbers"]["stepNum"].focus();
        return false;
    }
    else{
    document.getElementById("submitButton").innerHTML = "Recalculate";
    document.getElementById("results").style.display = "block";
    document.getElementById("num1").innerHTML = startNum;
    document.getElementById("num2").innerHTML = endNum;
    document.getElementById("num3").innerHTML = stepNum;
    return false;
    }
}
