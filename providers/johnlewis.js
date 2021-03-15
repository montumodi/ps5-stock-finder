const { getRawHtml } = require("../requestMaker");

const url = "https://www.johnlewis.com/search?search-term=ps+5+console&suggestion=true#_search_suggestion_referral";

async function process() {
    const rawHtml = await getRawHtml(url);
    if (!rawHtml) {
        return { "provider": "johnlewis", "message": "Error scrapping johnlewis", "time": new Date() };
    }
    if (rawHtml.includes("Out of stock")) {
        return { "provider": "johnlewis", "message": "Out of stock", "time": new Date() };
    } else {
        return { "provider": "johnlewis", "message": "Available", "time": new Date() };
    }
}

module.exports = process;