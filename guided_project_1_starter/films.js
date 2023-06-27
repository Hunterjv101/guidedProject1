async function fetchFilm(character) {
    const url = `https://swapi2.azurewebsites.net/api/films/${id}`;
    const film = await fetch(url)
      .then(res) => res.json();
    return film;
  }