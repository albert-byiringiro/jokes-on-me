// fetch for random jokes
async function getDemJokes() {
    try {
        const response = await fetch(
            "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function displayJokes() {
    try {
        const data = await getDemJokes();
        if (!data) {
            throw new Error("Jokes not found");
        }
        const container = document.querySelector(".container");
        const setupTitle = document.createElement("h1");
        setupTitle.textContent = data.setup;
        const deliveryText = document.createElement("p");
        deliveryText.textContent = data.delivery;

        container.append(setupTitle, deliveryText);
    } catch (error) {
        console.error(error);
    }
}

displayJokes();