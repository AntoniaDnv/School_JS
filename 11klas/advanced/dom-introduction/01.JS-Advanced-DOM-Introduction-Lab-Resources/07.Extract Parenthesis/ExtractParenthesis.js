function extract(content) {
 let currEl = document.getElementById(id);
 let arr = [];
 for(let i = 0; i< currEl.clientHeight; i++){
    let word = '';
    let startIndex = 0;
    let endIndex = 0;
    if(currEl[i]=="("){
        startIndex = i +1 ;

    }
    else if(currEl[i] == ")"){
      endIndex - i;
      arr.push(currEl.slice(startIndex, endIndex));
    }
 }
 console.log(arr.join())
}