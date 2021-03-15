const { getRawHtml } = require("../requestMaker");

const url = "https://www.game.co.uk/playstation-5";

async function process() {
    const rawHtml = await getRawHtml(url, {});
    if (!rawHtml) {
        return { "provider": "game", "message": "Error scrapping game", "time": new Date() };
    }
    if (rawHtml.includes("PlayStation 5")) {
        return { "provider": "game", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "game", "message": "Available", "time": new Date() };
    }
}

module.exports = process;