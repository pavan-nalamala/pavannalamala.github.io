const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const profilePic = document.querySelector(".profile-pic");
const description = document.querySelector(".desc");
const skills = document.querySelector(".skills");
const contactSection = document.querySelector(".contact-section");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    title.style.transform = "translateZ(150px)";
    profilePic.style.transform = "translateZ(100px) rotateZ(-15deg)";
    description.style.transform = "translateZ(125px)";
    skills.style.transform = "translateZ(100px)";
    contactSection.style.transform = "translateZ(75px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    profilePic.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    skills.style.transform = "translateZ(0px)";
    contactSection.style.transform = "translateZ(0px)";
});

