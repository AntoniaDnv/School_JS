function task1(input){
 let name = input[0];
 for(let i = 1; i<input.length; i++){
    let [command, ...rest] = input[i].split(" ");
    if(command == "Registration"){
      
        return;
    }
    else if( command == "Letters"){
        let newName;
      if(rest.includes("Lower")){
        newName = name.toLowerCase();
      }
      else{
        newName = name.toUpperCase(); 
      }
      name = newName;
      console.log(newName);
    }
    else if(command == "Reverse"){
        let start = rest[0];
        let end = +rest[1]+ +1;
        let reversedCahrs = name.substring(start, end).split('').reverse().join("");
        let newName = name.split('');
      newName.splice(start, end,reversedCahrs);
        console.log(newName.join(''));
        name = newName.join('');
    }
    else if(command == "Substring"){
        rest = rest.join("");
        let newName;
       if(name.includes(rest)){
        newName = name.replace(rest, '');
        console.log(newName);
       }
       else {
        console.log(`The username ${name} doesn't contain ${rest}.`)
       }
       
    }
    else if(command == "Replace"){
     rest = rest.join('');
     let newName;
     newName = name.replaceAll(rest, '-');
    //  for(let i =0; i<name.length; i++){
    //     if(rest == name[i]){
    //         name=name.replace(rest,'-');
    //     }
    //  }
     console.log(newName)
    }
 }
}
// task1([
// 'JohnDoe',
// 'Letters Lower',
// 'Reverse 1 3',
// 'Substring o',
// 'Replace n',
// 'Registration'
// ])
task1([
'SuperUser',
'Letters Upper',
'Substring per',
'Reverse 0 4',
'Replace U',
'Registration'
])