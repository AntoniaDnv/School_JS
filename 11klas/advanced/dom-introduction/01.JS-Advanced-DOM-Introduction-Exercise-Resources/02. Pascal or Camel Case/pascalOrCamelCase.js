function solve() {
  let text = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  let res = text.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());

  if(namingConvention == "Camel Case"){
    res = res[0].toLowerCase() + res.slice(1);
  }
  else if(namingConvention != "Pascal Case"){
    res = "Error!";
  };
  result.textContent = res;

}