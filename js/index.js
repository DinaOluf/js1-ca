
const API_URL = "https://mhw-db.com/monsters";

const resultContainer = document.querySelector(".result");

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}

async function getMonsters() {
    try {
        const response = await fetch(API_URL);
        const monsters = await response.json();

        resultContainer.innerHTML = "";

        for(let i = 0; i < monsters.length; i++){

            resultContainer.innerHTML += `<a href="details.html?id=${monsters[i].id}"><div class="monster-cards">
                        <h2>${monsters[i].name}</h2>
                        <p>Size: ${monsters[i].type}</p>
                        <p>Species: ${monsters[i].species}</p>
                        <p class="loc">Location: ${monsters[i].locations[0].name}</p>
                    </div></a>`

                    const locationsLength = monsters[i].locations.length;

                        if(locationsLength > 1) {
                            const locContainer = document.querySelectorAll(".loc");
                            locContainer[i].innerHTML += ` (...)`
                        }
        }

    } catch (error) {
    resultContainer.innerHTML = displayError("An error occurred when calling the API");
}
}

getMonsters();

