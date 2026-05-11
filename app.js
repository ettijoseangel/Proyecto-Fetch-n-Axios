//** Contenedores y botones comunes
const fetchBtn = document.getElementById("fetch-btn");
const axiosBtn = document.getElementById("axios-btn");
const dataContainer = document.getElementById("data-container");

//** 1. Implementación con Fetch
fetchBtn.addEventListener("click", () => {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }
      return response.json();
    })
    .then((data) => {
        // Completado: Usamos data.results para obtener el arreglo de personajes
        renderCharacters(data.results);
    })
    .catch((error) => {
      console.error("Error:", error);
      dataContainer.textContent = "Hubo un error al obtener los datos.";
    });
});

//** 2. Implementación con Axios

axiosBtn.addEventListener("click", () => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((response) => {
      const data = response.data;
     // Completado: En axios, la data ya viene parseada en el atributo .data
     // Accedemos a .results dentro de la respuesta de la API
     renderCharacters(response.data.results);
    })
    .catch((error) => {
      console.error("Error:", error);
      dataContainer.textContent = "Hubo un error al obtener los datos.";
    });
});

//** Función para renderizar los personajes en el contenedor
function renderCharacters(characters) {
    // Limpiamos el contenedor antes de agregar nuevos datos
  dataContainer.innerHTML = "";

  characters.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
      <p>Estado: ${character.status}</p>
    `;
    dataContainer.appendChild(characterElement);
  });
}
