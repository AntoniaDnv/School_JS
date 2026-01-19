function search() {
  let searchBox = document.getElementById("searchText");
  let list = document.getElementById('towns');
  let result = document.getElementById('result');
  let temp = 0;
  let arr = [...list.children];
  arr.forEach(element => {
   element.style.textDecoration = 'none';
   element.style.fontWeight = 'normal'; 
  });
  let filtered = arr.filter(li => li.textContent.includes(searchBox.value))
  filtered.forEach(element => {
    element.style.fontWeight = "bold";
      element.style.textDecoration = "underline";
    temp++
  });
  result.textContent = `${temp} matches found`;

}

