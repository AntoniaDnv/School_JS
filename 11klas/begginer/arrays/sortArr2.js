function sortArray(array){
    let sortedArr1 = array.sort((a,b) => a.length - b.length);
    let sortedArr2 = sortedArr1.sort((a,b) => a.localeCompare(b));
    console.log(sortedArr2.join(`\n`));
}