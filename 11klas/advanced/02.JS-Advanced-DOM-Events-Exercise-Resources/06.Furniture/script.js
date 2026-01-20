function solve() {
    let genBtn = document.querySelector('button');
    let tbody = document.querySelector('tbody');
    let buyBtn = document.querySelectorAll('button')[1];
    let firstArea = document.querySelector('textarea');

    genBtn.addEventListener('click', (ev) => {
       JSON.parse(firstArea.value).forEach(obj => {
        tbody.innerHTML += `
         <tr>
                                        <td>
                                            <img src="${obj.img}">
                                        </td>
                                        <td>
                                            <p>${obj.name}</p>
                                        </td>
                                        <td>
                                            <p>${obj.price}</p>
                                        </td>
                                        <td>
                                            <p>${obj.decFactor}</p>
                                        </td>
                                        <td>
                                            <input type="checkbox"/>
                                        </td>
        </tr>
        `;
       });
    });
    buyBtn.addEventListener('click', (ev)=>{
        let checkedBoxes = document.querySelectorAll('td input');
        
    })
}