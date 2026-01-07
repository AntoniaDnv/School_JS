function factorial(n){
    let output = 1;
    for(let i = 1; i<=n; i++){
        output *= i
    }
    console.log(output)
}
factorial(4)