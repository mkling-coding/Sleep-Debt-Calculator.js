// Mark Klingelhoefer
// Sleep Debt Calculator 1.0
// Determines how much sleep you need depending on age, then
// calculates how much sleep debt you have accumulated (if any) 
// in the past week.

// Allows program to get user input
const prompt = require("prompt-sync")();

// Number of sleep each age group needs per week
const newborn = 98;
const infant = 84;
const toddler = 77;
const preschool = 70;
const schoolAge = 63;
const teen = 56;
const adult = 49;

// User enters age
let age = prompt('Please enter your age: ');

// User enters hours of sleep they got for each day
let monday = prompt('Please enter how many hours of sleep you got on Monday: ');
let tuesday = prompt('Please enter how many hours of sleep you got on Tuesday: ');
let wednesday = prompt('Please enter how many hours of sleep you got on Wednesday: ');
let thursday = prompt('Please enter how many hours of sleep you got on Thursday: ');
let friday = prompt('Please enter how many hours of sleep you got on Friday: ');
let saturday = prompt('Please enter how many hours of sleep you got on Saturday: ');
let sunday = prompt('Please enter how many hours of sleep you got on Sunday: ');

// User's total number of hours slept last week
let weeklySleep = parseFloat(monday) + parseFloat(tuesday) + parseFloat(wednesday) + parseFloat(thursday) + parseFloat(friday) + parseFloat(saturday) + parseFloat(sunday);
// User's average hours slept per night
let sleepAvg = (weeklySleep/7).toFixed(1);

// Sleep debt calculator function
const debtCalculator = age => {
    if (age <= 0.3) {
        // Sets age group to weekly number of hours they need to
        // sleep depending on their age group
        let ageGroup = newborn;
        console.log('\nThe age you entered falls under the newborn age group.');
        console.log('It is recommended that a person in this group should get at least 14 hours of sleep a day and at least 98 hours of sleep a week.');
        // Logs to user their total hours slept and average
        console.log('You slept for a total of ' + weeklySleep.toFixed(1) + ' hours this week, averaging ' + sleepAvg + ' hours slept a night.');
        // Runs if they have met the sleep suggestions for their age
        if (weeklySleep >= parseFloat(ageGroup)) {
            console.log('You\'ve reached the amount of sleep suggested for your age group for the week. You have no sleep debt!')
        // Runs if they haven't met the sleep suggestions for their age
        } else {
            let sleepDebtDaily = ((parseFloat(ageGroup)) / 7) - parseFloat(sleepAvg);
            let sleepDebtWeekly = parseFloat(ageGroup) - weeklySleep;
            console.log('You did not reach the amount of sleep suggested for your age group for the week. Your weekly sleep debt is ' + sleepDebtWeekly.toFixed(1) + ' hours and your daily sleep debt is ' + sleepDebtDaily.toFixed(1) + ' hours.');
        }
    } else if (age > 0.3 && age < 1) {
        let ageGroup = infant;
        console.log('\nThe age you entered falls under the infant age group.');
        console.log('It is recommended that a person in this group should get at least 12 hours of sleep a day and at least 84 hours of sleep a week.');
        console.log('You slept for a total of ' + weeklySleep.toFixed(1) + ' hours this week, averaging ' + sleepAvg + ' hours slept a night.');
        if (weeklySleep >= parseFloat(ageGroup)) {
            console.log('You\'ve reached the amount of sleep suggested for your age group for the week. You have no sleep debt!')
        } else {
            let sleepDebtDaily = ((parseFloat(ageGroup)) / 7) - parseFloat(sleepAvg);
            let sleepDebtWeekly = parseFloat(ageGroup) - weeklySleep;
            console.log('You did not reach the amount of sleep suggested for your age group for the week. Your weekly sleep debt is ' + sleepDebtWeekly.toFixed(1) + ' hours and your daily sleep debt is ' + sleepDebtDaily.toFixed(1) + ' hours.');
        }
    } else if (age >= 1 && age < 3) {
        let ageGroup = toddler;
        console.log('\nThe age you entered falls under the toddler age group.');
        console.log('It is recommended that a person in this group should get at least 11 hours of sleep a day and at least 77 hours of sleep a week.');
        console.log('You slept for a total of ' + weeklySleep.toFixed(1) + ' hours this week, averaging ' + sleepAvg + ' hours slept a night.');
        if (weeklySleep >= parseFloat(ageGroup)) {
            console.log('You\'ve reached the amount of sleep suggested for your age group for the week. You have no sleep debt!')
        } else {
            let sleepDebtDaily = ((parseFloat(ageGroup)) / 7) - parseFloat(sleepAvg);
            let sleepDebtWeekly = parseFloat(ageGroup) - weeklySleep;
            console.log('You did not reach the amount of sleep suggested for your age group for the week. Your weekly sleep debt is ' + sleepDebtWeekly.toFixed(1) + ' hours and your daily sleep debt is ' + sleepDebtDaily.toFixed(1) + ' hours.');
        }
    } else if (age >= 3 && age < 6) {
        let ageGroup = preschool;
        console.log('\nThe age you entered falls under the preschool age group.');
        console.log('It is recommended that a person in this group should get at least 10 hours of sleep a day and at least 70 hours of sleep a week.');
        console.log('You slept for a total of ' + weeklySleep.toFixed(1) + ' hours this week, averaging ' + sleepAvg + ' hours slept a night.');
        if (weeklySleep >= parseFloat(ageGroup)) {
            console.log('You\'ve reached the amount of sleep suggested for your age group for the week. You have no sleep debt!')
        } else {
            let sleepDebtDaily = ((parseFloat(ageGroup)) / 7) - parseFloat(sleepAvg);
            let sleepDebtWeekly = parseFloat(ageGroup) - weeklySleep;
            console.log('You did not reach the amount of sleep suggested for your age group for the week. Your weekly sleep debt is ' + sleepDebtWeekly.toFixed(1) + ' hours and your daily sleep debt is ' + sleepDebtDaily.toFixed(1) + ' hours.');
        }
    } else if (age >= 6 && age < 13) {
        let ageGroup = schoolAge;
        console.log('\nThe age you entered falls under the \'school age\' age group.');
        console.log('It is recommended that a person in this group should get at least 9 hours of sleep a day and at least 63 hours of sleep a week.');
        console.log('You slept for a total of ' + weeklySleep.toFixed(1) + ' hours this week, averaging ' + sleepAvg + ' hours slept a night.');
        if (weeklySleep >= parseFloat(ageGroup)) {
            console.log('You\'ve reached the amount of sleep suggested for your age group for the week. You have no sleep debt!')
        } else {
            let sleepDebtDaily = ((parseFloat(ageGroup)) / 7) - parseFloat(sleepAvg);
            let sleepDebtWeekly = parseFloat(ageGroup) - weeklySleep;
            console.log('You did not reach the amount of sleep suggested for your age group for the week. Your weekly sleep debt is ' + sleepDebtWeekly.toFixed(1) + ' hours and your daily sleep debt is ' + sleepDebtDaily.toFixed(1) + ' hours.');
        }
    } else if (age >= 16 && age < 18) {
        let ageGroup = teen;
        console.log('\nThe age you entered falls under the teen age group.');
        console.log('It is recommended that a person in this group should get at least 8 hours of sleep a day and at least 56 hours of sleep a week.');
        console.log('You slept for a total of ' + weeklySleep.toFixed(1) + ' hours this week, averaging ' + sleepAvg + ' hours slept a night.');
        if (weeklySleep >= parseFloat(ageGroup)) {
            console.log('You\'ve reached the amount of sleep suggested for your age group for the week. You have no sleep debt!')
        } else {
            let sleepDebtDaily = ((parseFloat(ageGroup)) / 7) - parseFloat(sleepAvg);
            let sleepDebtWeekly = parseFloat(ageGroup) - weeklySleep;
            console.log('You did not reach the amount of sleep suggested for your age group for the week. Your weekly sleep debt is ' + sleepDebtWeekly.toFixed(1) + ' hours and your daily sleep debt is ' + sleepDebtDaily.toFixed(1) + ' hours.');
        }
    } else {
        let ageGroup = adult;
        console.log('\nThe age you entered falls under the adult age group.');
        console.log('It is recommended that a person in this group should get at least 7 hours of sleep a day and at least 49 hours of sleep a week.');
        console.log('You slept for a total of ' + weeklySleep.toFixed(1) + ' hours this week, averaging ' + sleepAvg + ' hours slept a night.');
        if (weeklySleep >= parseFloat(ageGroup)) {
            console.log('You\'ve reached the amount of sleep suggested for your age group for the week. You have no sleep debt!')
        } else {
            let sleepDebtDaily = ((parseFloat(ageGroup)) / 7) - parseFloat(sleepAvg);
            let sleepDebtWeekly = parseFloat(ageGroup) - weeklySleep;
            console.log('You did not reach the amount of sleep suggested for your age group for the week. Your weekly sleep debt is ' + sleepDebtWeekly.toFixed(1) + ' hours and your daily sleep debt is ' + sleepDebtDaily.toFixed(1) + ' hours.');
        }
    };
};

debtCalculator(age);
