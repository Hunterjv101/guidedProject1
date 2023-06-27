// This will return one Film, do with that what you will
async function fetchFilm(character) {
    const url = `https://swapi2.azurewebsites.net/api/films/${id}`;
    const film = await fetch(url)
      .then(res) => res.json();
    return film;
  }
// This will return multiple characters so I have to figure that out
async function fetchCharacter(character) {
    const url = ` https://swapi2.azurewebsites.net/api/films/${id}/characters`;
    const film = await fetch(url)
      .then(res) => res.json();
    return film;
  }