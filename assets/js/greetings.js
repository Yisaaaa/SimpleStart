//    _____                   _    _
//   / ____|                 | |  (_)
//  | |  __  _ __  ___   ___ | |_  _  _ __    __ _  ___
//  | | |_ || '__|/ _ \ / _ \| __|| || '_ \  / _` |/ __|
//  | |__| || |  |  __/|  __/| |_ | || | | || (_| |\__ \
//   \_____||_|   \___| \___| \__||_||_| |_| \__, ||___/
//                                            __/ |
//                                           |___/

const greetingTxtElement = document.querySelector(".greeting-txt");
const name = CONFIG.name;

// GREETINGS
const greetMorning = CONFIG.greetingMorning;
const greetAfternoon = CONFIG.greetingAfternoon;
const greetingNight = CONFIG.greetingNight;
const greetSleep = CONFIG.greetingSleep;

displayGreeting();

function displayGreeting() {
    greeting = setGreeting();
    greetingTxtElement.textContent = `${greeting}${name}`;
}

function setGreeting() {
    let d = new Date();
    let hour = d.getHours();
    let greeting;

    if (hour > 0 && hour < 12) {
        greeting = greetMorning;
    } else if (hour < 18) {
        greeting = greetAfternoon;
    } else if (hour < 21) {
        greeting = greetingNight;
    } else {
        greeting = greetSleep;
    }

    return greeting;
}
