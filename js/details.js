
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const details_url = "https://mhw-db.com/monsters/" + id;
const detailsContainer = document.querySelector(".details-container");

async function getMonsterDetails() {
    try {
        const response = await fetch(details_url);
        const details = await response.json();

        detailsContainer.innerHTML = `<div class="title-container"><h1>${details.name}</h1></div>
                        <p>Size: ${details.type}</p>
                        <p>Species: ${details.species}</p>
                        <p>Description: ${details.description}</p>
                        <ul class="location">Location(s):</ul>`

        getImageBySpecies(details);

        const locationList = document.querySelector(".location");

        details.locations.forEach(function(location) {
            locationList.innerHTML += `<li>${location.name}</li>`
         });

    } catch (error) {
    resultContainer.innerHTML = displayError("An error occurred when calling the API");
}
}

getMonsterDetails();

function getImageBySpecies(details){
    const titleContainer = document.querySelector(".title-container");
    console.log(titleContainer);

    if(details.species.toLowerCase() === "herbivore"){
        titleContainer.innerHTML = '<img src="../monster-icons/Herbivore.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "bird wyvern"){
        titleContainer.innerHTML = '<img src="../monster-icons/Bird-Wyvern.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "brute wyvern"){
        titleContainer.innerHTML = '<img src="../monster-icons/Brute-Wyvern.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "elder dragon"){
        titleContainer.innerHTML = '<img src="../monster-icons/Elder-Dragon.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "fanged wyvern"){
        titleContainer.innerHTML = '<img src="../monster-icons/Fanged-Wyvern.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "flying wyvern"){
        titleContainer.innerHTML = '<img src="../monster-icons/Flying-Wyvern.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "lynian"){
        titleContainer.innerHTML = '<img src="../monster-icons/Lynian.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "neopteron"){
        titleContainer.innerHTML = '<img src="../monster-icons/Neopteron.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "piscine wyvern"){
        titleContainer.innerHTML = '<img src="../monster-icons/Piscine-Wyvern.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "relict"){
        titleContainer.innerHTML = '<img src="../monster-icons/Relict.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "wingdrake"){
        titleContainer.innerHTML = '<img src="../monster-icons/Wingdrake.png" class="monster-img">' + titleContainer.innerHTML
    }
    
    if(details.species.toLowerCase() === "fish"){
        titleContainer.innerHTML = '<img src="../monster-icons/Fish.png" class="monster-img">' + titleContainer.innerHTML
    }

    if(details.species.toLowerCase() === "fanged beast"){
        titleContainer.innerHTML = '<img src="../monster-icons/Fanged-Beast.png" class="monster-img">' + titleContainer.innerHTML
    }
}

document.getElementById("back").addEventListener("click", () => {
    history.back();
  });
