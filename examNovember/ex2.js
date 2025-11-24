
function inventory(input) {
    let [items, ...commands] = input.split(', ');
  

  for (const row of commands) {
    if (row === 'Craft!') 
        {
            break;
        }

    let [command, arg] = row.split(' - ');

    if (command === 'Collect') {
      if (!items.includes(arg)){
        items.push(arg);
      } 
    } 
    else if (command === 'Drop') {
      const idx = items.indexOf(arg);
      if (idx !== -1) 
        {
            items.splice(idx, 1);
        } 
    } 
    else if(command === 'Combine items'){
        let indexOf = items.indexOf(':');
        let old = arg.slice(0, indexOf);
        
       
        if(items.includes(old)){
        
        let newItem = arg.slice(indexOf);
        items.insertBefore(newItem, old);
        }
    }
    else if(command === "Renew"){
        if(items.includes(arg)){
            let indexOfItem = items.indexOf(arg);
           items.push( items.splice((indexOfItem, 1)[0]));
            
        }
    }
  
    }
     return(items.Join(','))
  }

inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood',
'Craft!'])