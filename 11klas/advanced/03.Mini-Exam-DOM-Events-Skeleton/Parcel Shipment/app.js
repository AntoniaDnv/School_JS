function solution() {
   let regParcBtn = document.getElementById('registerButton');
   let input = document.querySelector('input');
   let listCard = document.querySelectorAll('ul')[0];
   let sendCard = document.querySelectorAll('section ul')[1];
   regParcBtn.addEventListener('click', (ev)=>{
   
      
      
      console.log(listCard);    

       let li = document.createElement('li');
       li.textContent = input.value;
       let createBtn = document.createElement('button');
       createBtn.textContent = 'Send';
       li.appendChild(createBtn);
       listCard.appendChild(li);
       createBtn.addEventListener('click', (ev)=> {
        listCard.removeChild(li);
            li.removeChild(createBtn);
            sendCard.appendChild(li);
            let test = [...sendCard.children].sort((a, b) => a.textContent.localeCompare(b.textContent))
            sendCard.innerHTML ='';
            test.forEach(el=> sendCard.appendChild(el));
       })
       let test = [...listCard.children].sort((a, b) => a.textContent.localeCompare(b.textContent))
      listCard.innerHTML ='';
      test.forEach(el=> listCard.appendChild(el));
       
   input.value = '';
   });

}