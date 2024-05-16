const homeButton = document.querySelector(".home_button")
const projectButton = document.querySelector(".project_button")
const contactButton = document.querySelector(".contact_button")
const aboutButton = document.querySelector(".about_button")

const video = document.querySelector(".bg-video");

        // Set the playback speed to 50%
        video.playbackRate = 0.8;

let title = document.querySelector(".title")

// z

const homeZ= document.querySelector(".zhome")
const projectZ = document.querySelector(".zproject")
const contactZ = document.querySelector(".zcontact")
const aboutZ = document.querySelector(".zabout")


// home

homeButton.onclick = () => {

    title.innerText = "PORTFOLIO"
    
    //buttons
    
    homeButton.style.color = "red";
    projectButton.style.color = "white";
    contactButton.style.color = "white";
    aboutButton.style.color = "white";
    
    // z 
    
    homeZ.style.zIndex = "1"
    projectZ.style.zIndex = "-1"
    contactZ.style.zIndex = "-2"
    aboutZ.style.zIndex = "-3"
}

//project

projectButton.onclick = () => {

    title.innerText = "PROJECTS"
    
    // buttons
    
    homeButton.style.color = "white";
    projectButton.style.color = "red";
    contactButton.style.color = "white";
    aboutButton.style.color = "white";
    
    // z 
    
    homeZ.style.zIndex = "-1"
    projectZ.style.zIndex = "1"
    contactZ.style.zIndex = "-2"
    aboutZ.style.zIndex = "-3"
}

//contact

contactButton.onclick = () => {

    title.innerText = "CANTACT"
    
    // buttons
    
    homeButton.style.color = "white";
    projectButton.style.color = "white";
    contactButton.style.color = "red";
    aboutButton.style.color = "white";
    
    // z 
    
    homeZ.style.zIndex = "-2"
    projectZ.style.zIndex = "-1"
    contactZ.style.zIndex = "1"
    aboutZ.style.zIndex = "-3"
}

//about

aboutButton.onclick = () => {

    title.innerText = "ABOUT ME"
    
    // buttons
    
    homeButton.style.color = "white";
    projectButton.style.color = "white";
    contactButton.style.color = "white";
    aboutButton.style.color = "red";
    
    // z 
    
    homeZ.style.zIndex = "-3"
    projectZ.style.zIndex = "-1"
    contactZ.style.zIndex = "-2"
    aboutZ.style.zIndex = "1"
}