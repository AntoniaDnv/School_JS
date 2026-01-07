function cutAndReverse(input){
        let first ='';
        let second ='';
        for(let i =0; i<input.length/2; i++){
            first += input[input.length/2 - 1-i];
              second += input[input.length - i-1];
        }
        console.log(first);
        console.log(second);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')