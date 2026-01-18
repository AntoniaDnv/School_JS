function extract(content) {
let parameter = document.getElementById(content).textContent;
let pattern = /\(([^)]+)\)/g;

let result = [];
let match = pattern.exec(parameter);
while(match){
  result.push(match[1]);
  match =   pattern.exec(parameter);
}
return result.join('; ');
}