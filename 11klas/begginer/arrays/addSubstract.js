function addAndSubstract(array) {
    let modifiedArray = [];
    let originalSum = 0;
    let modifiedSum = 0;

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];
        originalSum += currentNum;

        if (currentNum % 2 === 0) {
            currentNum += i; 
        } else {
            currentNum -= i; 
        }

        modifiedArray.push(currentNum);
        modifiedSum += currentNum;
    }

    console.log(modifiedArray);
    console.log(originalSum);
    console.log(modifiedSum);
}

addAndSubstract([5, 15, 23, 56, 35])
