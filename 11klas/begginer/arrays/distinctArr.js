function distinctArray(numbers){
   numbers = numbers.filter((value, index)=> numbers.indexOf(value) === index)
    console.log(numbers.join(' '))
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])