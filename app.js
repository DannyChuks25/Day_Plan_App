let days = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday" ];

let dayIndex = new Date().getDay();  // Gets day index
console.log(`Today is ${dayIndex}`);

let today = days[dayIndex];   // Gets specific day based on index value
console.log(today);

// Sun: Church, Mon-Thurs: Work, Fri: Mosque, Sat: Party
const dayEvent = document.getElementById('event');
if(dayIndex == 0){
    dayEvent.innerHTML = 'Church';
}
if(dayIndex >= 1 && dayIndex <= 4){
    dayEvent.innerHTML = 'Work';
}
if(dayIndex== 5){
    dayEvent.innerHTML = 'Mosque';
}
if(dayIndex == 6){
    dayEvent.innerHTML = 'Party';
}

// Sunday, Monday, Tuesday......
const dayTime = document.getElementById('day');
dayTime.innerHTML = today;

// Morning, afternoon, evening, night
const time_of_day = document.getElementById('dayTime');

// Get hour of the day to determine morning, afternoon, evening or night
let hour = new Date().getHours();
const mdn_content = document.getElementById('mdn');
let minutes = new Date().getMinutes();
console.log(`The minute is ${minutes}`);
let mdn;
let hourT;
function pm(){
    if(hour <= 12){
        hourT = hour + 12;
        //hour += 12;
        mdn = "am";
    }
}
function am(){
    if(hour > 12){
        hourT = hour - 12;
        //hour -= 12;
        mdn = "pm";
    }
}
(hour <= 12) ? pm() : am();
mdn_content.innerHTML = `${hour}:${minutes < 10 ? '0' + minutes : minutes}${mdn}`;

console.log(`The hour is ${hourT}`);
console.log(hour);

let output;
if(hour >= 17 && hour <= 20){
    output = "evening";
    time_of_day.innerHTML = output;
} 
if(hour >= 12 && hour <= 16 || hour === 0){
    output = "afternoon";
    time_of_day.innerHTML = output;
}
if(hour >= 6 && hour <= 11){
    output = "morning";
    time_of_day.innerHTML = output;
} 
if(hour >= 1 && hour <= 5 || hour >= 21 && hour <= 24){
    let output = "night";
    time_of_day.innerHTML = output;
} 







