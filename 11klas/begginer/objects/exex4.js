function movies(input) {
  let cinema = [];

  for (let i = 0; i < input.length; i++) {
    let command = input[i].split(" ");
    if (command.includes("addMovie")) {
      let name = command.slice(1).join(" ");
      cinema.push({ name });
    }
    if (command.includes("directedBy")) {
      let [movieName, director] = command.toString().split(",directedBy,");
      let keys = Object.keys(cinema);
      let movie = keys.includes(movieName);
      if (movie) {
        cinema.push((movieName.director = director));
      }
    }
    if (command.includes("onDate")) {
      let [name, date] = command.toString().split(" onDate ");
      let movie = command.find((m) => m.name === name);

      if (movie) {
        cinema.name.date = date;
      }
    }
  }

  console.log(JSON.stringify(cinema));
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
