const text =[
    "Student",
    "Aspiring Web Developer",
    
  
];

let i = 0;
let j = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {
    const current = text[i];

    if (!deleting) {
        typing.textContent = current.substring(0, j++);
        if (j > current.length) {
            deleting = true;
        }
    } else {
        typing.textContent = current.substring(0, j--);
        if (j === 0) {
            deleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(typeEffect, deleting ? 80 : 120);
}

typeEffect();

function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
}