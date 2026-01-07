function storeProvision(storageArray, deliveryArray)
{
    let storage ={};
   
   
    for(let i = 0; i<storageArray.length; i+=2){
       let productName = storageArray[i];
       let quantity = +storageArray[i+1];
        storage[productName] = quantity;
    }
   for (let index = 0; index < deliveryArray.length; index+=2) {
      let productName = deliveryArray[index];
       let quantity = +deliveryArray[index+1];
    if (productName in storage) {
    storage[productName] += quantity;
    }
    else{
        storage[productName] = quantity;
    }
}

   for (const key in storage) {
    
    const element = storage[key];
    
    console.log(`${key} -> ${element}`)
   }
   
}
storeProvision([
'Chips', '5', 'CocaCola', '9', 'Bananas',
'14', 'Pasta', '4', 'Juice', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7',
'Tomatoes', '70', 'Bananas', '30'
])