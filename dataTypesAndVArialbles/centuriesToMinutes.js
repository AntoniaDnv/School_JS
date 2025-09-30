function centuriesMinute(input){
   let centuries = Number(input),
   years = centuries * 100,
   days = Math.floor(years * 365.2422),
   hours = days*24,
   minutes = hours * 60;

   console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`)
}