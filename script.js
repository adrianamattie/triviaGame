$(document).ready()
var triviaGameContainer = document.getElementById("triviaGame");
var resultsContainer = document.getElementById('results');
var $startButton = $("#startBtn");

var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;

var images;

var count = 30;

var $answerA = $(".answer0A");
var $answerB = $(".answer0B");
var $answerC = $(".answer0C");
var $answerD = $(".answer0D");

var $answer1A = $(".answer1A");
var $answer1B = $(".answer1B");
var $answer1C = $(".answer1C");
var $answer1D = $(".answer1D");

var $answer2A = $(".answer2A");
var $answer2B = $(".answer2B");
var $answer2C = $(".answer2C");
var $answer2D = $(".answer2D");

var $answer3A = $(".answer3A");
var $answer3B = $(".answer3B");
var $answer3C = $(".answer3C");
var $answer3D = $(".answer3D");

var $answer4A = $(".answer4A");
var $answer4B = $(".answer4B");
var $answer4C = $(".answer4C");
var $answer4D = $(".answer4D");

var $answer5A = $(".answer5A");
var $answer5B = $(".answer5B");
var $answer5C = $(".answer5C");
var $answer5D = $(".answer5D");
console.log($('input[name=form0]:checked').val());

startGame()
var timer = 20;
var countDown;
$startButton.on("click", run);
console.log($('input[name=form0]:checked').val());

function run() {
    clearInterval(countDown);
    countDown = setInterval(timerCount, 1000);
}

function stop() {
    clearInterval(countDown);
}

function timerCount() {
    timer--;
    $("#time").html("Timer: " + timer);
    if (timer === 0) {
        stop();
        alert("You Should go to Ireland! You Lose.")
    }
}

console.log($('input[name=form0]:checked').val());

var myQuestions = [{
    question: "On what day of the week was it regarded as being unlucky to cut your fingernails?",
    answers: {
        a: "Sunday",
        b: "Monday",
        c: "Wednesday",
        d: "None of These"
    },
    correctAnswer: "a"
},

{
    question: "Allegedly what will happen if you kiss the Blarney Stone?",
    answers: {
        a: "You will become Invincible",
        b: "You will get really good at doing your taxes",
        c: "You will get the gift of the gab",
        d: "You will stay young forever"
    },
    correctAnswer: 'c'
},

{
    question: "During which years did the Irish Potato Famine take place?",
    answers: {
        a: "1789 - 99",
        b: "1845 - 49",
        c: "2000 - 2012",
        d: "1456 - 89"
    },
    correctAnswer: 'b'
},

{
    question: "What does the IRA stand for?",
    answers: {
        a: "Irritating Red armoury",
        b: "Ireland Rules Assholes",
        c: "Irish Revolution Army",
        d: "Irish Rebublican Army"
    },
    correctAnswer: "d"
},

{

    question: "What country sells the most amount of Guinness",
    answers: {
        a: "Nigeria",
        b: "Canada",
        c: "Ireland",
        d: "Australia"
    },
    correctAnswer: "a"
},
{

    question: "How many pints of Guinness are produced in Ireland daily?",
    answers: {
        a: "3 Million",
        b: "5 Million",
        c: "10 Million",
        d: "7 Million"
    },
    correctAnswer: 'c'
}
];



// for (i = 0; i < myQuestions[0].answers.length;)
//     console.log(myQuestions[0].answers.length); {
//         var s = $("<input>");
//         s.addClass("selection ");
//         s.attr("type", "radio");
//         $(".selection" + i).append(s);
//     };


var answerInputA = $("<input>").addClass("selection").attr("type", "radio").attr("name", "form0").attr("value",
    true);
$answerA.append(answerInputA);

var answerInputB = $("<input>").addClass("selection").attr("type", "radio").attr("name", "form0").attr("value",
    false);
$answerB.append(answerInputB);

var answerInputC = $("<input>").addClass("selection").attr("type", "radio").attr("name", "form0").attr("value",
    false);
$answerC.append(answerInputC);
var answerInputD = $("<input>").addClass("selection").attr("type", "radio").attr("name", "form0").attr("value",
    false);
$answerD.append(answerInputD);



$(".question0").prepend(myQuestions[0].question);
$(".answer0A").append(myQuestions[0].answers.a);
$(".answer0B").append(myQuestions[0].answers.b);
$(".answer0C").append(myQuestions[0].answers.c);
$(".answer0D").append(myQuestions[0].answers.d);

var answerInputA = $("<input>").addClass("selection1").attr("type", "radio").attr("name", "form1").attr("value",
    false);
$answer1A.append(answerInputA);
var answerInputB = $("<input>").addClass("selection1").attr("type", "radio").attr("name", "form1").attr("value",
    false);
$answer1B.append(answerInputB);
var answerInputC = $("<input>").addClass("selection1").attr("type", "radio").attr("name", "form1").attr("value",
    true);
$answer1C.append(answerInputC);
var answerInputD = $("<input>").addClass("selection1").attr("type", "radio").attr("name", "form1").attr("value",
    false);
$answer1D.append(answerInputD);

$(".question1").prepend(myQuestions[1].question);
$answer1A.append(myQuestions[1].answers.a);
$answer1B.append(myQuestions[1].answers.b);
$answer1C.append(myQuestions[1].answers.c);
$answer1D.append(myQuestions[1].answers.d);


var answerInputA = $("<input>").addClass("selection2").attr("type", "radio").attr("name", "form2").attr("value",
    false);
$answer2A.append(answerInputA);
var answerInputB = $("<input>").addClass("selection2").attr("type", "radio").attr("name", "form2").attr("value",
    true);
$answer2B.append(answerInputB);
var answerInputC = $("<input>").addClass("selection2").attr("type", "radio").attr("name", "form2").attr("value",
    false);
$answer2C.append(answerInputC);
var answerInputD = $("<input>").addClass("selection2").attr("type", "radio").attr("name", "form2").attr("value",
    false);
$answer2D.append(answerInputD);

$(".question2").prepend(myQuestions[2].question);
$answer2A.append(myQuestions[2].answers.a);
$answer2B.append(myQuestions[2].answers.b);
$answer2C.append(myQuestions[2].answers.c);
$answer2D.append(myQuestions[2].answers.d);

var answerInputA = $("<input>").addClass("selection3").attr("type", "radio").attr("name", "form3").attr("value",
    false);
$answer3A.append(answerInputA);
var answerInputB = $("<input>").addClass("selection3").attr("type", "radio").attr("name", "form3").attr("value",
    false);
$answer3B.append(answerInputB);
var answerInputC = $("<input>").addClass("selection3").attr("type", "radio").attr("name", "form3").attr("value",
    false);
$answer3C.append(answerInputC);
var answerInputD = $("<input>").addClass("selection3").attr("type", "radio").attr("name", "form3").attr("value",
    true);
$answer3D.append(answerInputD);

$(".question3").prepend(myQuestions[3].question);
$answer3A.append(myQuestions[3].answers.a);
$answer3B.append(myQuestions[3].answers.b);
$answer3C.append(myQuestions[3].answers.c);
$answer3D.append(myQuestions[3].answers.d);

var answerInputA = $("<input>").addClass("selection4").attr("type", "radio").attr("name", "form4").attr("value",
    true);
$answer4A.append(answerInputA);
var answerInputB = $("<input>").addClass("selection4").attr("type", "radio").attr("name", "form4").attr("value",
    false);
$answer4B.append(answerInputB);
var answerInputC = $("<input>").addClass("selection4").attr("type", "radio").attr("name", "form4").attr("value",
    false);
$answer4C.append(answerInputC);
var answerInputD = $("<input>").addClass("selection4").attr("type", "radio").attr("name", "form4").attr("value",
    false);
$answer4D.append(answerInputD);

$(".question4").prepend(myQuestions[4].question);
$answer4A.append(myQuestions[4].answers.a);
$answer4B.append(myQuestions[4].answers.b);
$answer4C.append(myQuestions[4].answers.c);
$answer4D.append(myQuestions[4].answers.d);

var answerInputA = $("<input>").addClass("selection5").attr("type", "radio").attr("name", "form5").attr("value",
    false);
$answer5A.append(answerInputA);
var answerInputB = $("<input>").addClass("selection5").attr("type", "radio").attr("name", "form5").attr("value",
    false);
$answer5B.append(answerInputB);
var answerInputC = $("<input>").addClass("selection5").attr("type", "radio").attr("name", "form5").attr("true",
    true);
$answer5C.append(answerInputC);
var answerInputD = $("<input>").addClass("selection5").attr("type", "radio").attr("name", "form5").attr("value",
    false);
$answer5D.append(answerInputD);

$(".question5").prepend(myQuestions[5].question);
$answer5A.append(myQuestions[5].answers.a);
$answer5B.append(myQuestions[5].answers.b);
$answer5C.append(myQuestions[5].answers.c);
$answer5D.append(myQuestions[5].answers.d);

function startGame() {
    var $startButton = $("#startBtn");
    var $triviaGame = $("#triviaGame");
    var $hide = $("#hide")

    $("#hide").hide("$triviaGame");

    $startButton.on("click", () => {
        $hide.fadeIn();
        console.log($('input[name=form0]:checked').val());
    })

}


//question 0 

//  userAnswer = ($('.selection.(input[value=true]:checked'));

//         if (userAnswer === true) {
//             alert("Correct Answer");
//             console.log('true')
//         }
if ($('input[name=form0]:checked').val() === true) {
    alert("Correct Answer");
    console.log('true');

}


        //         } else if ($answerB.checked) {
        //             alert("Wrong Answer")
        //         } else if ($answerC.checked) {
        //             alert("Wrong Answer")
        //         } else if ($answerD.checked) {
        //             alert("Wrong Answer")
        //         }

        // if($('.radio[value=timer]').is(':checked')) {
        //     console.log('timer');
        // }

        //     var $answerA = $(".answer0A");
        // var $answerB = $(".answer0B");
        // var $answerC = $(".answer0C");
        // var $answerD = $(".answer0D");
