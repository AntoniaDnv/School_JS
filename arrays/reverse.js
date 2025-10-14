function reverseArray(n, array){
    let newarr = [];
    for(let i = 0; i<n; i++){
     newarr.unshift(array[i]);
    }
    console.log(newarr.join(' '));
}
reverseArray(3, [
10, 20, 30])