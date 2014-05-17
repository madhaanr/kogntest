
var texts = ["Welcome to Short Term Memory Test, press enter to continue",
             "You are about to start a short term memory test, press space bar to start",
             "Input the numbers in order which they came, after you are ready press space bar",
             "Numbers you remembered"];
var numbers = ["7","6","5","4","3"]
var numbersRemembered = [ ];
var index=0;
var state = 0;
var interval;

function showNumberInterval() {
    interval=setInterval(showNumber, 1000);
}

function showNumber() {
    if(index<numbers.length) {
        document.getElementById("number").innerHTML = numbers[index];
        console.log("numbers index: "+index);
    }
    if(index==numbers.length) {
        window.clearInterval(interval);
        document.getElementById("number").innerHTML = "";
        document.getElementById("info").innerHTML = texts[2];
        state++;
    }
    index++;
}

$(document).keydown(function(e) {
    if(e.which == 13&&state==0) { //enter
        document.getElementById("info").innerHTML = texts[1];
        console.log("13")
        state++;
    }
    else if (e.which == 32&&state==1) { //space to start
        console.log("32");
        showNumberInterval();
    }
    else if(e.which == 8) { //reset with backspace
        index=0;
        state=0;
        document.getElementById("info").innerHTML = texts[index];
    }
    else if(state==2) {
        numbersRemembered += String.fromCharCode(e.which) + " ";
        console.log(e.which);
        if(e.which==32) {
            document.getElementById("info").innerHTML = texts[3];
            document.getElementById("number").innerHTML = numbersRemembered;
            console.log("number remembered: "+numbersRemembered)
        }
    }
    console.log("state: " + state);
    console.log("keypressed");
});

$(document).ready(function() {
   document.getElementById("info").innerHTML = texts[0];
});

