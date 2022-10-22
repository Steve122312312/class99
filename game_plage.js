var player1name = localStorage.getItem("player1")
var player2name = localStorage.getItem("player2")
var player1score = 0
var player2score = 0
var word
var answer
var qnturn = "player1"
var ansturn = "player2"

document.getElementById("player1name").innerHTML = player1name
document.getElementById("player2name").innerHTML = player2name
document.getElementById("player1score").innerHTML = player1score
document.getElementById("player2score").innerHTML = player2score

document.getElementById("playerquestion").innerHTML = "Question Turn -" + player1name
document.getElementById("playeranswer").innerHTML = "Answer Turn -" + player2name

function sendquestion() {
    var getword = document.getElementById("question").value
    word = getword.toLowerCase()
    char1 = word.charAt(1)
    halflength = Math.floor(word.length / 2)
    char2 = word.charAt(halflength)
    char3 = word.charAt(word.length - 1)


    removechar1 = word.replace(char1, "_")
    removechar2 = removechar1.replace(char2, "_")
    removechar3 = removechar2.replace(char3, "_")
    console.log(removechar3)
    var question = "<h4 id='questionword' >q-" + removechar3 + "</h4>"
    var answerbox = "<input id='answerword' placeholder='Type Your Answer Here'></input>"
    var check = "<br><button class='btn btn-primary' onclick='check()'>check</button>"
    var output = question + answerbox + check
    document.getElementById("output").innerHTML = output

    document.getElementById("question").value=" "
}



function check() {
    getanswer = document.getElementById("answerword").value
    answer = getanswer.toLowerCase()

    if (word == answer) {
        if (ansturn == "player1") {
            player1score = player1score + 1
            document.getElementById("player1score").innerHTML = player1score
        }
        if (ansturn == "player2") {
            player2score = player2score + 1
            document.getElementById("player2score").innerHTML = player2score
        }

    }
    if (qnturn == "player1") {
        console.log(player2name)
        qnturn = "player2"
        ansturn = "player1"
        console.log(qnturn)
        document.getElementById("playerquestion").innerHTML = "Question Turn -" + player2name
        document.getElementById("playeranswer").innerHTML = "Answer Turn -" + player1name
    }

    if (qnturn == "player2") {
        qnturn = "player1"
        ansturn = "player2"
        document.getElementById("playerquestion").innerHTML = "Question Turn -" + player1name
        document.getElementById("playeranswer").innerHTML = "Answer Turn -" + player2name
    }

  document.getElementById("output").innerHTML=" "








}








































