function search() {
  let searchBox = document.getElementById("searchText");
  let list = document.getElementById('towns');
  let arr = [...list.children].filter(li => li.textContent.includes(searchBox))
  
}

