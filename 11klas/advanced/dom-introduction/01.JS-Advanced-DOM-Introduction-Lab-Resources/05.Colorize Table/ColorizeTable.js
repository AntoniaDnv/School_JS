function colorize() {
   let items = [...document.querySelectorAll('table tr')];
   let n = items.length;
   items.forEach(element => {
    if(n%2 ==0){
        element.style.background = "teal";
    }
        n--;
   });
}