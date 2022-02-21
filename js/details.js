
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const details_url = "https://mhw-db.com/monsters/" + id;
const detailsContainer = document.querySelector(".details-container");

async function getMonster() {
    try {
        const response = await fetch(details_url);
        const details = await response.json();

        detailsContainer.innerHTML = `<h1>${details.name}</h1>
                        <p>Size: ${details.type}</p>
                        <p>Species: ${details.species}</p>
                        <p>Description: ${details.description}</p>
                        <ul class="location">Location(s):</ul>`

        const locationList = document.querySelector(".location");

        details.locations.forEach(function(location) {
            locationList.innerHTML += `<li>${location.name}</li>`
         });

    } catch (error) {
    resultContainer.innerHTML = displayError("An error occurred when calling the API");
}
}

getMonster();

document.getElementById('back').addEventListener('click', () => {
    history.back();
  });
