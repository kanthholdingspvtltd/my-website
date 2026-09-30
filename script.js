/* =========================
   ASTRIX TYPING EFFECT
========================= */

const typingText =
    document.getElementById("typing-text");


const roles = [

    "Student",

    "Developer",

    "Blogger",

    "Creator"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;

        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex ===
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );

}


typeEffect();