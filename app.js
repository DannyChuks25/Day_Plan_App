let days = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday" ];

let day = new Date().getDay();  // Gets day index
console.log(day);

day = days[day];   // Gets specific day based on index value
console.log(day);

// Sun: Church, Mon-Thurs: Work, Fri: Mosque, Sat: Party
const dayEvent = document.getElementById('event');
if(day===days[0]){
    dayEvent.innerHTML = 'Church';
}
if(day===days[1] || day===days[2] || day===days[3] || day===days[4]){
    dayEvent.innerHTML = 'Work';
}
if(day===days[5]){
    dayEvent.innerHTML = 'Church';
}
if(day===days[6]){
    dayEvent.innerHTML = 'Church';
}

// Sunday, Monday, Tuesday......
const dayTime = document.getElementById('day');
dayTime.innerHTML = day;

// Morning, afternoon, evening, night
const time_of_day = document.getElementById('dayTime');

// Get hour of the day to determine morning, afternoon, evening or night
let hour = new Date().getHours();
console.log(hour);
let output;
if(hour >= 1 && hour <= 11){
    output = "morning";
    time_of_day.innerHTML = output;
} 
if(hour >= 12 && hour <= 16){
    output = "afternoon";
    time_of_day.innerHTML = output;
}
if(hour >= 17 && hour <= 23){
    output = "evening";
    time_of_day.innerHTML = output;
} 
if(hour === 24){
    let output = "night";
    time_of_day.innerHTML = output;
}




