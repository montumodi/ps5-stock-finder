const { getRawHtml } = require("../requestMaker");

const url = "https://ao.com/brands/playstation?cmredirectionvalue=PlayStation%205";

async function process() {
    const rawHtml = await getRawHtml(url);
    if (!rawHtml) {
        return { "provider": "ao", "message": "Error scrapping ao", "time": new Date() };
    }
    if (rawHtml.includes("Sorry, PlayStation 5 is currently unavailable")) {
        return { "provider": "ao", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "ao", "message": "Available", "time": new Date() };
    }
}

module.exports = process;