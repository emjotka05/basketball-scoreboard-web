let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0


function resetScore(){
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}

resetScore()



function homeAddOne(){
    homeScore += 1
    homeEl.textContent = homeScore 
}

function guestAddOne(){
    guestScore += 1
    guestEl.textContent = guestScore 
}

function homeAddTwo(){
    homeScore += 2
    homeEl.textContent = homeScore 

}

function guestAddTwo(){
    guestScore += 2
    guestEl.textContent = guestScore 
   
}

function homeAddThree(){
    homeScore += 3
    homeEl.textContent = homeScore 
   
}

function guestAddThree(){
    guestScore += 3
    guestEl.textContent = guestScore 
   
}

