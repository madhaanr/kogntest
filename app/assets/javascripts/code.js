
var texts = {welcome:   "Welcome to Short Term Memory Test, press enter to continue",
             start:     "You are about to start a short term memory test, press space bar to start",
             input:     "Input the numbers in order which they came, after you are ready press space bar",
             inputSeq:  "Number sequence as you remembered them",
             testSeq:   "Number sequence as it was in the test",
             points:    "points for your results: "};
var numbers = ["7","6","5","4","3"]
var numbersRemembered = [];
var index = 0;
var state = 0;
var points = 0;
var intervalVariable;

function showNumberInterval() {
    intervalVariable=setInterval(showNumber, 100);
}

function showNumber() {
    if(index<numbers.length) {
        $("#number").html(numbers[index]);
    }
    if(index==numbers.length) {
        window.clearInterval(intervalVariable);
        $("#number").html("");
        $("#info").html(texts['input']);
        state++;
    }
    index++;
}

function countPoints() {
    var length=0;
    if(numbers.length>=numbersRemembered.length) {
        length=numbers.length;
    } else {
        length=numbersRemembered.length;
    }
    for(var i=0;i<length;++i) {
        if(numbers[i]==numbersRemembered[i]) {
            points+=(i+1)*2;
            console.log("Hello points: "+points)
        }
    }
}

$(document).keydown(function(e) {
    if(e.which == 13&&state==0) { //enter
        $("#info").html(texts['start']);
        state++;
    }
    else if (e.which == 32&&state==1) { //space to start
        showNumberInterval();
    }
    else if(e.which == 8) { //reset with backspace
        index=0;
        state=0;
        $("#info").html(texts['welcome']);
    }
    else if(state==2) {
        numbersRemembered += String.fromCharCode(e.which);
        if(e.which==32) {
            countPoints();
            $("#info").html(texts['testSeq']);
            $("#number").html(numbers);
            $("#info2").html(texts['inputSeq']);
            $("#numbersRemembered").html(numbersRemembered);
            $("#points").html(texts['points']+points);
        }
    }
    console.log("state: " + state);
    console.log("keypressed");
});

$(document).ready(function() {
    $("#info").html(texts['welcome']);
});

