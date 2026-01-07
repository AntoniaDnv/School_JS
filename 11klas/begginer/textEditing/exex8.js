function hardWord(input) {
    let letter = input[0];
    let words = input[1]
  for (let j = 0; j < letter.length; j++) {
    let curr = "";
    if ("_" == letter[j]) {
      curr += "_";
    }

    for (let i = 0; i < words.length; i++) {
      if (words[i].length == curr) {
        letter = letter.replace(curr, words[i]);
        curr ='';
      }
    }
  }
  console.log(letter);
}


hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so_______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Everynight Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
]);
