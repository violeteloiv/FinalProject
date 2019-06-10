var input;
var inScore;
var leaderboard;
var initials;
var score;
var amount;

function preload()
{
    leaderboard = loadJSON("../BackEnd/data.json");
}

function setup() {}

function submitToLeaderboard()
{
    input = document.getElementById("input");
    inScore = document.getElementById("score");
    initials = input.value;
    score = inScore.value;
    amount = parseInt(leaderboard["amount"]);

    let l = leaderboard["people"].length;

    leaderboard["people"][amount].initials = initials;
    leaderboard["people"][amount].score = score;
    amount++;
    leaderboard["amount"] = amount;

    console.log(leaderboard["people"][0].initials, leaderboard["people"][0].score);
    saveJSON(leaderboard, "../BackEnd/data.json");

    window.location.href = "../HTML/leaderboard.html";
}
