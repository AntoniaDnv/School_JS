function addAndSubtract(first, second, third){
    function add(first, second){
        let a  = +first + +second
        return a;
    }

    function sub (third){
       let a = add(first, second);
       let num = a - third;
       return num;
    }
    console.log(sub(third));
}