const intro = document.getElementById("intro");
const mainWebsite = document.getElementById("mainWebsite");


// =========================
// ENTER WEBSITE
// =========================

function enterWebsite() {

    intro.style.transition = "1.2s ease";
    intro.style.opacity = "0";
    intro.style.transform = "scale(1.08)";

    setTimeout(() => {

        intro.style.display = "none";
        mainWebsite.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "instant"
        });

        createHearts();

    }, 1200);
}


// =========================
// FLOATING HEARTS
// =========================

function createHearts() {

    const heartContainer = document.querySelector(".hearts");

    const symbols = ["♡", "♥", "✦", "✧"];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.fontSize =
            (Math.random() * 10 + 10) + "px";

        heart.style.animationDuration =
            (Math.random() * 4 + 5) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 9000);

    }, 700);
}


// =========================
// REASONS
// =========================

const reasons = [

    "Thank you for understanding me even when I don't explain everything.",

    "Thank you for making me smile on days when I don't feel like smiling.",

    "I love how I can be completely myself when I'm with you.",

    "Some of my favourite memories are simply the moments I spent with you.",

    "And somehow, you became my favourite person without even trying."
];

let reasonIndex = 0;

function nextReason() {

    const text = document.getElementById("reasonText");
    const number = document.getElementById("reasonNumber");

    reasonIndex++;

    if (reasonIndex >= reasons.length) {
        reasonIndex = 0;
    }

    text.style.opacity = "0";
    text.style.transform = "translateY(10px)";

    setTimeout(() => {

        text.innerText = reasons[reasonIndex];

        number.innerText =
            String(reasonIndex + 1).padStart(2, "0");

        text.style.transition = "0.5s ease";

        text.style.opacity = "1";
        text.style.transform = "translateY(0)";

    }, 250);
}


// =========================
// SURPRISE
// =========================

function openSurprise() {

    const finalSection = document.getElementById("final");

    finalSection.scrollIntoView({
        behavior: "smooth"
    });

    setTimeout(() => {

        createConfetti();

    }, 1000);
}


// =========================
// BLUE CONFETTI
// =========================

function createConfetti() {

    const pieces = 70;

    for (let i = 0; i < pieces; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            ["✦", "✧", "♡", "•"]
            [Math.floor(Math.random() * 4)];

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-20px";

        confetti.style.zIndex = "9999";

        confetti.style.color =
            ["#5ba7ff", "#8bc7ff", "#dceeff", "#ffffff"]
            [Math.floor(Math.random() * 4)];

        confetti.style.fontSize =
            (Math.random() * 12 + 8) + "px";

        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration =
            Math.random() * 2500 + 2000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}


// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(
        ".story-card, .reason-card, .letter, .love-card"
    )
    
    .forEach((element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(35px)";

        element.style.transition =
            "all 1s ease";

        observer.observe(element);

    });
    // =========================
// OUR SONG
// =========================

function toggleMusic() {

    const song = document.getElementById("ourSong");
    const button = document.getElementById("playBtn");
    const vinyl = document.getElementById("vinyl");

    if (song.paused) {

        song.play();

        button.innerHTML = "❚❚";

        vinyl.classList.add("playing");

    } else {

        song.pause();

        button.innerHTML = "▶";

        vinyl.classList.remove("playing");
    }
}
// =========================
// SINCE YOU COUNTER
// =========================

// CHANGE THIS TO YOUR RELATIONSHIP START DATE
const relationshipDate = new Date("2025-02-16T00:00:00");

function updateCounter() {

    const now = new Date();

    let years = now.getFullYear() - relationshipDate.getFullYear();

    let months = now.getMonth() - relationshipDate.getMonth();

    let days = now.getDate() - relationshipDate.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
}

updateCounter();

setInterval(updateCounter, 1000);
// =========================
// SECRET MESSAGE
// HOLD TO UNLOCK
// =========================

let holdTimer;
let holdProgress = 0;
let holding = false;

function startHold() {

    if (holding) return;

    holding = true;

    const progress =
        document.getElementById("holdProgress");

    const text =
        document.getElementById("holdText");

    const button =
        document.getElementById("holdBtn");

    holdProgress = 0;

    text.innerText = "UNLOCKING...";

    holdTimer = setInterval(() => {

        holdProgress += 2;

        progress.style.width =
            holdProgress + "%";

        if (holdProgress >= 100) {

            clearInterval(holdTimer);

            text.innerText = "UNLOCKED ♡";

            document
                .getElementById("hiddenMessage")
                .classList.add("show");

            button.style.borderColor = "#8bc7ff";

            holding = false;
        }

    }, 40);
}


function stopHold() {

    if (!holding) return;

    clearInterval(holdTimer);

    holding = false;

    const progress =
        document.getElementById("holdProgress");

    const text =
        document.getElementById("holdText");

    if (holdProgress < 100) {

        holdProgress = 0;

        progress.style.width = "0%";

        text.innerText = "HOLD TO UNLOCK";
    }
}
if (holdProgress >= 100) {

    clearInterval(holdTimer);

    text.innerText = "UNLOCKED ♡";

    document
        .getElementById("hiddenMessage")
        .classList.add("show");

    button.style.borderColor = "#8bc7ff";

    createUnlockHearts();

    holding = false;
}
// =========================
// UNLOCK HEARTS
// =========================

function createUnlockHearts() {

    const button =
        document.getElementById("holdBtn");

    const rect =
        button.getBoundingClientRect();

    for (let i = 0; i < 18; i++) {

        const heart = document.createElement("div");

        heart.innerHTML =
            ["♡", "♥", "✦"][Math.floor(Math.random() * 3)];

        heart.style.position = "fixed";

        heart.style.left =
            rect.left + rect.width / 2 + "px";

        heart.style.top =
            rect.top + rect.height / 2 + "px";

        heart.style.color = "#69afff";

        heart.style.fontSize =
            (Math.random() * 10 + 12) + "px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        const x =
            (Math.random() - 0.5) * 180;

        const y =
            (Math.random() - 0.5) * 150;

        heart.animate(
            [
                {
                    transform: "translate(0, 0) scale(0.5)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(${x}px, ${y}px) scale(1.2)`,
                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}