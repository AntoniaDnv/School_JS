function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField');
      let searchText = search.value.toLowerCase();
      let rows = [...document.querySelectorAll('tbody tr')];
      rows.forEach(row => row.classList.remove('select'));
     rows.forEach(row => {
      let cells = [...row.querySelectorAll('td')];
      let hasMatch = cells.some(cell => cell.textContent.toLowerCase().includes(searchText));
      if(hasMatch && searchText !== ''){
         row.classList.add('select');
     }
     });

    search.value = '';
   }
}