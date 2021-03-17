const App = require("./sendToGoogleHome");
const randomIntFromInterval = require("./randomizer");
const cTable = require('console.table');
const playSound = require("./playSourd");

(async () => {
    while (true) {
        const array = [
            require("./providers/amazon")(),
            require("./providers/ao")(),
            require("./providers/argo")(),
            require("./providers/very")(),
            require("./providers/johnlewis")(),
            require("./providers/ebuyer")(),
            require("./providers/game")(),
            require("./providers/asda")()
        ];

        const responses = await Promise.all(array);
        console.table(responses);
        const available = responses.filter(i => i.message === "Available");
        if (available.length > 0) {
            console.log(available);
            await playSound();
        }
        await new Promise(resolve => setTimeout(resolve, randomIntFromInterval(5000, 10000)))
    }
})();

