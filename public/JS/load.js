var leaderboardData;
var leaderboard;

function preload()
{
    leaderboardData = loadJSON("../BackEnd/data.json");
    leaderboard = document.getElementById("leaderboard");
}

function setup()
{
    console.log(leaderboard, leaderboardData);
}
