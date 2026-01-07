function birthdayParty(input){
 let cake = input * 0.2;
 let drinks = cake - cake * 0.45 ;
 let animator = input / 3;
 let allExpences = cake + drinks + animator + input;
 console.log(allExpences);
}

birthdayParty(2250);