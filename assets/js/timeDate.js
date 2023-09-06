// TIME AND GREETINGS SCRIPT
const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

// DATE ELEMENTS
const monthElement = document.querySelector(".month");
const dayElement = document.querySelector(".day");

// TIME ELEMENTS
const hourElement = document.querySelector(".hour");
const minutesElement = document.querySelector(".minutes");

function displayDateTime() {
    const d = new Date();

    // DATE
    const day = d.getDate();
    const month = MONTHS[d.getMonth()];

    // TIME
    let hour = d.getHours();
    let minutes = d.getMinutes();

    if (!CONFIG.twentyFourHourFormat) {
        if (hour > 12) {
            hour -= 12;
        } else if (hour === 0) {
            hour = 12;
        }
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    hourElement.textContent = hour;
    minutesElement.textContent = minutes;
    monthElement.textContent = month;
    dayElement.textContent = day;

    setTimeout(displayDateTime, 5000);
}

window.addEventListener("load", () => {
    displayDateTime();
});
