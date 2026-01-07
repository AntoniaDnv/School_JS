function password(input){
    let name =  input[0];
    let rightPass = input[1];
    let n = 0;
    for(let i = 2; i< input.length; i++){
        if(input[i] === rightPass){
            console.log(`Welcome ${name}!`);
           n++;
        }
    }
    if (n = 0){
console.log('try another pass!')
    }
    
}
password(
['Nakov',
'1234',
'pass',
'1324',
'1234'])