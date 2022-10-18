let homePoints = 0
let visitorPoints = 0
let homeScoreBoard = document.querySelector(".home")
let homeScore = document.getElementById("container-home")
let visitorScore = document.getElementById("container-visitors")

function add1Point(){
    homePoints += 1
    homeScore.textContent = homePoints
}

function add2Points(){
    homePoints += 2
    homeScore.textContent = homePoints
}

function add3Points(){
    homePoints += 3
    homeScore.textContent = homePoints
}


function add1PointVisitor(){
    visitorPoints += 1
    visitorScore.textContent = visitorPoints
}

function add2PointsVisitor(){
    visitorPoints += 2
    visitorScore.textContent = visitorPoints
}

function add3PointsVisitor(){
    visitorPoints += 3
    visitorScore.textContent = visitorPoints
}

function newGame(){
    homePoints = 0
    visitorPoints = 0
    visitorScore.textContent = visitorPoints
    homeScore.textContent = homePoints
}