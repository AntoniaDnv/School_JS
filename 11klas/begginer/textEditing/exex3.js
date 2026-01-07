function extractFile(filePath){
    let indx = filePath.lastIndexOf('\\');
    let indxSec = filePath.lastIndexOf('.')
    let fileNAme = filePath.slice(indx+1, indxSec);
    let razshirenie = filePath.slice(indxSec+1);
console.log(`File name: ${fileNAme}`);
console.log(`File extention: ${razshirenie}`);
}


extractFile('C:\\Internal\\training-internal\\Template.pptx')