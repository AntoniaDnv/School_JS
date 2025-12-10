function comic(pictures, args){
 for(let i =0; i<args.length; i++)
    if(args[i] == 'End')break;
    let [comm, ...other] = args[i].split(' ');
    if(comm == "Done"){
        let lastPic = pictures.pop();
        console.log(`${lastPic} is ready for printing!`);

    } else if(comm =='Add'){
        pictures.unshift(other[0])
    } else if(com == 'Remove'){
        let newArr = pictures.slice(0, other[0]).concat(pictures.slice(other[1]))
        pictures.splice(other[0], other[1]- other[0] +1)
    }
}