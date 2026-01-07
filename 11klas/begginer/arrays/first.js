function dayOfWeek(number){
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'];
    if(number >= 1 && number <= 7){
        console.log(weekDays[number - 1]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(6)
