let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")
let homeTitleEl = document.getElementById("home")
let guestTitleEl = document.getElementById("guest")

let homeScore = 0
let guestScore = 0


function resetScore(){
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
    highlight()
}

resetScore()



function homeAddOne(){
    homeScore += 1
    homeEl.textContent = homeScore 
    highlight()
}

function guestAddOne(){
    guestScore += 1
    guestEl.textContent = guestScore 
    highlight()
}

function homeAddTwo(){
    homeScore += 2
    homeEl.textContent = homeScore
    highlight() 

}

function guestAddTwo(){
    guestScore += 2
    guestEl.textContent = guestScore
    highlight() 
   
}

function homeAddThree(){
    homeScore += 3
    homeEl.textContent = homeScore
    highlight() 
   
}

function guestAddThree(){
    guestScore += 3
    guestEl.textContent = guestScore
    highlight()
   
}

function highlight(){

    let color = "#EEEEEE"
    let highlightColor = "#FFFFFF"
    let glow = "0px 0px 5px #FFFFFF"

    homeTitleEl.style.color = color
    homeTitleEl.style.textShadow = "none"

    guestTitleEl.style.color = color
    guestTitleEl.style.textShadow = "none"

    if (homeScore > guestScore){
        homeTitleEl.style.color = highlightColor
        homeTitleEl.style.textShadow = glow
    } else if (guestScore > homeScore){
        guestTitleEl.style.color = highlightColor
        guestTitleEl.style.textShadow = glow
    }
    
}

