

function random() {
    var n = 25;
    var number = Math.floor(Math.random()*n)+1;
    document.getElementById("randomNumber").innerHTML = number;
};

var texts = ["Welcome to Short Term Memory Test, press enter to start",
             "you are about to start a short term memory test, press any key to start"];

var numberArray = ["7","6","5","4","3"]
var index=0;
function showNumber() {
    setInterval(numbers(), 500);
}

function numbers() {
    document.getElementById("number").innerHTML = numberArray[index];
    index++;
    index%=numberArray.length;
    console.log("moro "+index);
}

$(document).ready(function() {
   document.getElementById("dom").innerHTML = "Hellow World";
   document.getElementById("info").innerHTML = texts[0];
   $(document).keydown(function(e) {
        if(e.which == 13) {
            document.getElementById("info").innerHTML = texts[1];
            console.log("13")
            showNumber();
        }
        else if(e.which == 8 ) {
            document.getElementById("info").innerHTML = texts[0];
            console.log("8");
        }
        console.log("keypressed");
   });
});

