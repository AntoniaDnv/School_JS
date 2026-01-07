function gladiatorExpenses(arg1, arg2, arg3, arg4, arg5){
    let totalSpendMoney = 0;
    let lostFights = arg1;
    let helmetPrice = arg2;
    let swordPrice = arg3;
    let shieldPrice = arg4;
    let brokenShieldTimes = 0;
    let armorPrice = arg5;
    for(let i = 1; i<=lostFights; i++){
       if(i%2 === 0){
        totalSpendMoney+=helmetPrice;
       }
       if(i%3===0){
        totalSpendMoney+=swordPrice;
       }
       if(i%3===0 && i%2===0){
        totalSpendMoney+=shieldPrice;
        brokenShieldTimes++;
       }
       if(brokenShieldTimes%2 === 0 && brokenShieldTimes !== 0){
        totalSpendMoney+=armorPrice;
        brokenShieldTimes = 0;
       }
    }
    console.log(`Gladiator expenses: ${totalSpendMoney.toFixed(2)} aureus`);
}

gladiatorExpenses(23
,
12.50,
21.50,
40,
200)